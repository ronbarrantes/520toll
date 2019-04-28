const { Router } = require('express')
const isHoliday = require('../lib/getTodayInfo')

const cheerio = require('cheerio')
const fetch = require('node-fetch')
const toolLink = process.env.TOLL_URI

const gettingChildrenArray = () => {
  return child => child.children
    .filter((child) => child.type === 'tag')
    .map(child => child.children[1].children[0].data)
}

console.log(isHoliday())

module.exports = new Router()
  .get('/api/toll', (req, res, next)=>{
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

        res.send(
          'TOOL INFO ON CONSOLE'
        )

      })
      .catch(next)
  })


  .get('/api/toll/static', (req, res, next)=>{
    const table1 =
      [[ 'Monday - Friday', 'Good To Go! Pass', 'Pay By Mail' ],
        [ 'Midnight to 4:59 a.m.', '$1.25', '$3.25' ],
        [ '5 a.m. to 5:59 a.m.', '$2.00', '$4.00' ],
        [ '6 a.m. to 6:59 a.m.', '$3.40', '$5.40' ],
        [ '7 a.m. to 8:59 a.m.', '$4.30', '$6.30' ],
        [ '9 a.m. to 9:59 a.m.', '$3.40', '$5.40' ],
        [ '10 a.m. to 1:59 p.m.', '$2.70', '$4.70' ],
        [ '2 p.m. to 2:59 p.m.', '$3.40', '$5.40' ],
        [ '3 p.m. to 5:59 p.m.', '$4.30', '$6.30 ' ],
        [ '6 p.m. to 6:59 p.m.', '$3.40', '$5.40' ],
        [ '7 p.m. to 8:59 p.m.', '$2.70', '$4.70' ],
        [ '9 p.m. to 10:59 p.m.', '$2.00', '$4.00' ],
        [ '11 p.m. to 11:59 p.m.', '$1.25', '$3.22' ] ]

    const table2 =
    [ [ 'Weekends and Holidays**', 'Good To Go! Pass', 'Pay By Mail' ],
      [ 'Midnight to 4:59 a.m.', '$1.25', '$3.25' ],
      [ '5 a.m. to 7:59 a.m.', '$1.40', '$3.40' ],
      [ '8 a.m. to 10:59 a.m.', '$2.05', '$4.05' ],
      [ '11 a.m. to 5:59 p.m.', '$2.65', '$4.65' ],
      [ '6 p.m. to 8:59 p.m.', '$2.05', '$4.05' ],
      [ '9 p.m. to 10:59 p.m.', '$1.40', '$3.40' ],
      [ '11 p.m. to 11:59 p.m.', '$1.25', '$3.25' ],
    ]


    const resultTable = table1
      .filter((child, i)=> i !== 0)
      .reduce((curr, next) =>{
        let [schedule, goodToGo, payByMail] = next
        let time
        let firstHour = schedule.split('to')[0].trim().split(' ')

        if(schedule.includes('Midnight')){
          time = 0
        }
        else if(firstHour[1].includes('p')){
          time = parseInt(firstHour[0]) + 12
        }
        else time = parseInt(firstHour[0])
        return curr = [
          ...curr,
          {
            time,
            schedule,
            goodToGo,
            payByMail,
          },
        ]

      }, [])

    res.json(resultTable)

  })

