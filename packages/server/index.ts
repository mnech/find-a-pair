import dotenv from 'dotenv';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
dotenv.config();
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { createClientAndConnect } from './db/db';
import ApiRouter from './routes/index';

dotenv.config();

const isDev = () => process.env.NODE_ENV === 'development';

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const port = Number(process.env.SERVER_PORT) || 3001;

  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(require.resolve('client/dist/index.html'));
  const srcPath = path.dirname(require.resolve('client'));
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs');

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }
  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: {
        '*': '',
      },
      target: 'https://ya-praktikum.tech',
    }),
  );

  app.use('', ApiRouter);

  await createClientAndConnect();

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)');
  });

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  app.get('/sw.js', async (_, res, next) => {
    try {
      const fileName = path.resolve(srcPath, 'sw.js');

      res.sendFile(fileName);
    } catch (error) {
      if (isDev() && vite) {
        vite.ssrFixStacktrace(error as Error);
      }
      next(error);
    }
  });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8',
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8',
        );

        template = await vite!.transformIndexHtml(url, template);
      }

      let mod;

      if (isDev()) {
        mod = await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'));
      } else {
        mod = await import(ssrClientPath);
      }
      const { render } = mod;

      const [initialState, appHtml] = await render(url);

      const stateHtml = `<script>window.initialState = ${JSON.stringify(
        initialState,
      )};</script>`;
      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace('<!--store-data-->', stateHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
