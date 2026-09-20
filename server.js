import express from 'express'
import employeeRouter from './routers/employee.router.js'
import { env } from './config/env.js'
import { logger } from './utils/logger.utils.js'



const app = express()

// Declaring to use json format
app.use(express.json())

app.use(employeeRouter)

app.listen(env.SERVER_PORT, () => {
    logger.server(`Servidor Express iniciado na porta https://localhost:${env.SERVER_PORT}`)
}) 