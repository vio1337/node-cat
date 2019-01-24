const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const hostname = '0.0.0.0'
const port = 2020

const API_KEY = 'j1tzyTL48H4rZwLqnt88zknzzVLCCmJR'

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})

router.get('/:cat-jective', (req, res) => {
	
	res.json()	
}) 

app.use('/', router)
app.listen(process.env.port || port)
console.log(`Magic happens on http://${hostname}:${port}`)