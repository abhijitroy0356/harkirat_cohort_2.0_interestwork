const express= require('express');
var cors = require('cors');
const { clear } = require('console');
const app= express()
app.use(cors())
app.get('/interest',(req, res)=>{
    const amount = parseInt(req.query.amount);
    const rate =parseInt(req.query.rate)
    const time=parseInt(req.query.time)
    const response = (amount*rate*time)/100;
    console.log(response)
    const total = parseInt(amount+response)
    console.log(total)
    res.send({
        total:total
    })
})

app.listen(3000)