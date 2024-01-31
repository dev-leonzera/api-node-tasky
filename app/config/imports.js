const express = require('express');

require("dotenv").config();
const app = express();
const jsonParser = express.json();
const router = express.Router();
const port = process.env.PORT;

module.exports = { 
    app,
    jsonParser, 
    router, 
    port 
};
