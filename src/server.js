const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.static('public'));

app.use(cors());

app.get('/api/bios/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://torre.bio/api/bios/${username}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});