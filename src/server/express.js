import express, {Router} from 'express'
import locations from '../routes/locations.js'

const app = express()
const router = Router()

router.use('/location', locations)

app.use(express.json())
app.use('/', router)

export default app