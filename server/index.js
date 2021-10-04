app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use(express.static("client"));

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log("Hey you, you're finally awake")
})