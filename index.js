require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get ("/linkdin",(req,res) =>{
    res.send("hello i am subhash saket")
})
app.get("/login",(req,res) =>{
    res.send("<h1>please login page</h1>")

})
app.get("/youtube",(req,res) =>{
    res.send("<h2>Subhashsaket</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})  