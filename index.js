// import ("express");


const app = express()
const port = 5000
const cors = require("cors")

app.use(express.urlencoded({ extends: true }))
app.use(express.json)
app.use(cors())
app.get("/", (req, res) => {
    res.send("This is working now!");
});
app.listen(port, () => {
    console.log(`listening to our port at http://localhost:${port}`)
})



