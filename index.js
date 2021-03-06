const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello From Doctors App')
})

app.listen(port, () => {
    console.log(`Doctors app listening on port ${port}`)
})