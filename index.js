require('dotenv').config()

const express = require('express')
const tollRouter = require('./routes/toll')

const port = process.env.PORT || 3000

const app = express()

app.use(tollRouter)

app.get('/', (req, res)=>{

  const rightNow = Date.now()


  res.send(
    `Hello, Today is ${rightNow}`
  )
})

app.get('/api/tool', (req, res)=>{


})


app.listen(port, ()=>console.log(`RUNNING @ ${port}`))


