const express = require('express')
const bodyParser = require('body-parser')
const latexService = require('./latexService.js')
const cors = require('cors')

const app = express()
app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get("/latex/convert", latexService.convert);
app.post("/latex/convert", bodyParser.json({ limit: '1mb' }), latexService.convert);

app.listen(3100, () => {
    console.log("Server is listening on port 3100");
});