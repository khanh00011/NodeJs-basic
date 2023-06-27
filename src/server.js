// const express = require('express')
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web.js";
import connection from "./configs/connectDB"
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8000 ;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})