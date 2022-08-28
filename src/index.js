import app from './server/express.js'
const port = process.env.PORT_SERVER || "8000";


app.listen(port, () => {
    console.log(`server is listening in ${port}`)
})