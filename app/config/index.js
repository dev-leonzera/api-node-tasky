const express = require('express');

require("dotenv").config();
const app = express();
const router = express.Router();
const port = process.env.PORT;

module.exports = { 
    app, 
    router, 
    port 
};
