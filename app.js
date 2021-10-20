var express = require('express')
var cors = require('cors')
var app = express()
let Student=require('./models').Student;
app.use(cors())
app.get("/create",(req,res)=>{
  Student.create({
    name:"Aemiro mekete",
    email:"aemiro@gmail.com"
  }).catch((err)=>{
    console.log(err)
  })
  res.send("Student created")
})
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(5050, function () {
  console.log('CORS-enabled web server listening on port 5050')
})