const express = require('express');
const router = express.Router();
const bioController = require('./controllers/bioController');

router.get('/bios/:username', bioController.getBio);

module.exports = router;