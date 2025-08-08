const express = require("express")
const app = express()
const router = express.Router()

const path = require("path")
console.log(path.join(__dirname + "/pages/home.html"))

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(3333, () => {
    console.log("Server is running on http://localhost:3333")
})
