import express, {Router} from 'express'
import locations from './routes/locations.js'

const app = express()
const router = Router()

router.use('/location', locations)

app.use(express.json())
app.use('/', router)
const port = process.env.PORT_SERVER || "8000";
app.listen(port, () => {
    console.log(`server is listening in ${port}`)
})