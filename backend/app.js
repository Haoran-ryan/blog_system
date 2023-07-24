require('dotenv')

const express = require('express');

const app = express(); 
const PORT = process.env.PORT || 8080 
const HOST = process.env.HOST || `localhost`
app.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})