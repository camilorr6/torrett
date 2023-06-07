const express = require('express');
const cors = require('cors');
const routes = require('./modules');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use('/api', routes); 
app.listen(process.env.PORT || 4000, 
	() => console.log("Server is running..."));

