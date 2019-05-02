require('dotenv').config()
const express = require('express')
const cors = require('cors')
const tollRouter = require('./api/routes/toll')

const port = process.env.PORT || 3000

const app = express()

app.use(require('morgan')('common'))
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
app.use(express.static(`${__dirname}/dist`))
app.use(tollRouter)
app.get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
app.listen(port, () => console.log(`RUNNING @ ${port}`))


