const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('./dist',{
    index: "index.html"
}))

app.listen(port, () => console.log(`Joshua\' app listening on port ${port}!`))