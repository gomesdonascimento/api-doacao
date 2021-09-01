import express from 'express'
import config from './config'

import rpaRoutes from './routes/rpa.routes'

const app = express()

//setings
app.set('port', config.port || 3000)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(rpaRoutes)

export default app