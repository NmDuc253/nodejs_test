const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {res.send('Hihi')
var a = 1;
var b = 2;
var c = a + b;
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))