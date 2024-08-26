const API_Key = "1ECD4B12-D31D-4BA3-8200-A901BEDC75B5"
import express from "express"
import bodyparser from "bodyparser"

const app = express()
const port = 3000

app.use(express.bodyparser.json())

app.get("/" (req, res) => {
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`app is runing in port ${port}`)
})

