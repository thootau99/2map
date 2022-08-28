const express = require('express')
const { router: locations } = require('../routes/locations.js')

const app = express()
const router = express.Router()

router.use('/locations', locations)

app.use(express.json())
app.use('/', router)

module.exports = {
    app
}