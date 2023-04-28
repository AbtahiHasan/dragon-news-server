const express = require("express")
const cors = require("cors")

// import categoryData from './database/categories.json' assert {type: 'json'}
// import newsData from './database/news.json' assert {type: 'json'}

const categoryData = require("./database/categories.json")
const newsData = require("./database/news.json")

const app = express()
app.use(cors())
const port = 3000
app.get("/", (req, res) => {
    res.send("server is runing")
})
app.get("/categories", (req,res) => {
    res.send(categoryData)
})

app.get("/categories/:id", (req,res) => {
    const id = req.params.id
    if(id === "0") {
        return res.send(newsData)
    }
    const categores = newsData.filter(news => news.category_id === id)
    res.send(categores)
})


app.get("/all-news", (req,res) => {
    res.send(newsData)
})
app.get("/news/:id", (req,res) => {
    const id = req.params.id    

    const newses = newsData.find(news => news._id === id)
    res.send(newses)
})

app.listen(port, () => {
    console.log(`this server runing on ${port}`)
})