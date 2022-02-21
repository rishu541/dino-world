import express from 'express';
import 'dotenv/config';
const app = express();
const port = 3000;
import fetch from 'node-fetch';

app.use(express.static('public'));

const API_KEY = process.env.API_KEY;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/dinoname', async (req, res) => {
  const fetchApi = await fetch(
    'https://dinoipsum.com/api/?format=json&words=2&paragraphs=1'
  );
  const dinoNameResponse = await fetchApi.json();
  console.log(dinoNameResponse);
  res.json(dinoNameResponse);
});
app.get('/dinoimage', async (req, res) => {
  const fetchApi = await fetch(
    'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=30',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
    }
  );
  const dinoImageResponse = await fetchApi.json();
  console.log(dinoImageResponse);
  res.json(dinoImageResponse);
});
