import dotenv from 'dotenv';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
dotenv.config();

import express from 'express';
import * as fs from 'fs';
import * as path from 'path';
const isDev = () => process.env.NODE_ENV === 'development';

async function startServer() {
  const app = express();
  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3001;

  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(require.resolve('client/dist/index.html'));
  const srcPath = path.dirname(require.resolve('client'));
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs');

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
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

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  if (!isDev) {
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

  app.use(express.static(distPath));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    console.log({ url });

    try {
      let template: string;
      let render: (
        url: string,
      ) => Promise<{ appHtml: string; stateScript: string }>;

      if (isDev() && vite) {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8',
        );
        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render;
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8',
        );

        render = (await import(ssrClientPath)).render;
      }

      const { appHtml, stateScript } = await render(req.url);
      console.log({ stateScript });

      const html = template
        .replace('<!--SSR-->', appHtml)
        .replace('<!--state-->', stateScript);
      console.log({ html });
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      if (isDev() && vite) {
        vite.ssrFixStacktrace(error as Error);
      }
      next(error);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
