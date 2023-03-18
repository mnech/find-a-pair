import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createClientAndConnect } from './db';

import App from '../client/src/App';

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

createClientAndConnect();

app.get('/*', (_, res) => {
  const html = renderToString(<App />);

  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="root">${html}</div>
</body>
</html>
`);
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
