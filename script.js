const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
 res.send('Hello world from TeamCity')
})

app.listen(4000, () => {
    console.log('listening for request on port 4000')
})