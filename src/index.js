const {app} = require('./server/express.js')
const { initDB } = require('./db/mongo.js')
const port = process.env.PORT_SERVER || "8000";


app.listen(port, async () => {
    await initDB()
    console.log(`server is listening in ${port}`)
})