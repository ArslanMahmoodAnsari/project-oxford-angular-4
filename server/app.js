// express
const express = require("express");
const app = express();

// static folder
app.use(express.static(__dirname + '/public/src'));

// body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CORS - for handeling the http requests 
var cors=require('./cors');
app.use(cors.permission)

// Mongoose - connection to mLab
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:toor@ds161179.mlab.com:61179/first_project');

// project oxford
const oxford = require('project-oxford'), client = new oxford.Client('0bd837cc949249bea74f91fd34a55d69');

// routes
const faces = require('./routes/faces');
app.use('/api/faces', faces);
const histories = require('./routes/histories');
app.use('/api/histories', histories);

//server setup 
app.listen(3000);
console.log("working on 3000");
