const express = require('express')
const { router: locations } = require('../routes/locations.js')
const { router: cities} = require('../routes/cities.js')
const app = express()
const router = express.Router()

router.use('/locations', locations)
router.use('/cities', cities)

app.use(express.json())
app.use('/', router)

module.exports = {
    app
}