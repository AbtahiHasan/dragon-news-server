const express = require("express")
// import { Express } from "express"

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`this server runing on ${port}`)
})