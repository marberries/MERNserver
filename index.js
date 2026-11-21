'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

require('./database')();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'MERN File Upload API is running' });
});

app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));