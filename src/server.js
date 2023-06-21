// const express = require('express')
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express()
const port = 8000

configViewEngine(app);
app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/about' , (req , res) => {
    res.send("day la trang about");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})