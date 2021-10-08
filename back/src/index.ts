import express from "express"
import bodyParser from "body-parser"

import health from './health'

const PORT = 8081

const app = express()
app.use(bodyParser.json())

app.use('/health',  health)

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
