import express from 'express';
import cors from 'cors';
import fs from 'fs';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('client'));

const keywords = JSON.parse(fs.readFileSync('keywords.json', 'utf8'));

app.get('/urls', (req, res) => {
  const keyword = req.query.keyword;
  const urls = keywords[keyword];
  if (!urls) {
    return res.status(404).json({ error: 'Ключевое слово не найдено' });
  }
  res.json({ urls });
});

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Content-Length', Buffer.byteLength(text, 'utf8'));
    res.send(text);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при загрузке контента' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});