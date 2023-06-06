const axios = require('axios');

exports.getBio = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://torre.bio/api/bios/${username}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
