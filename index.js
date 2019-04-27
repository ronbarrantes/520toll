require('dotenv').config()

const fs = require('fs')
const express = require('express')
// const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

const port = process.env.PORT || 3000
const toolLink = process.env.TOLL_URI

const app = express()
// app.use(bodyParser.text({ type: 'text/html' }))
// .then(res => res.body)

const gettingChildrenArray = () => {
  return child => child.children
    .filter(child => child.type === 'tag')
    .map(child => child.children[1].children[0].data)
}

fetch(toolLink)
  .then(res => res.buffer())
  .then(res => res.toString())
  .then(html=>{

    const $ = cheerio.load(html)

    const tables = $('table').find('tbody')
    const table1 = tables[0].children
      .map(gettingChildrenArray()
      )
    const table2 = tables[1].children
      .map(gettingChildrenArray()
      )


    // .filter((child, i) => i<1)
    console.log(`
    ###########################
    ###########################
    `)
    console.log('TABLE --->', table1)
    console.log(`
    ###########################
    ###########################
    `)
    console.log('TABLE --->', table2)

    // console.log(html)
  })

app.get('/', (req,res)=>{
  res.send(
    'hello'
  )
})

app.listen(port, ()=>console.log(`RUNNING @ ${port}`))


