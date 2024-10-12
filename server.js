import express from 'express';
import fs from 'fs';


const app = express();

//serve up static files from the /public directory
app.use(express.static("./public"))

//configure your web server to parse json in a request body
app.use(express.json());
