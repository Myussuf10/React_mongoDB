const express = require("express");


const app = express();

// For Deploymnet listen to enviorment variable PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT);