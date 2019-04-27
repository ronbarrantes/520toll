require('dotenv').config()
const express = require('express')
const buffer = require('buffer')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const port = process.env.PORT || 3000
const toolLink = process.env.TOLL_URI

const app = express()
app.use(bodyParser.text({ type: 'text/html' }))



// .then(res => res.body)


fetch(toolLink)
  .then(res => res.buffer())
  .then(res => res.toString())
  .then(html=>{

    
  })

app.get('/', (req,res)=>{
    res.send(
      'hello'
    )
})

app.listen(port, ()=>console.log(`RUNNING @ ${port}`))
