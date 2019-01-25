const express = require('express')
const app = express()
require('dotenv/config')

const path = require('path')
const router = express.Router()
const fetch = require('node-fetch')

const hostname = '0.0.0.0'
const port = 2020

const urlHead = 'http://api.giphy.com/v1/gifs/search?q='
const urlTail = `&api_key=${process.env.API_KEY}&limit=10`

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

router.get('/:catjective', async (req, res) => {
	console.log(req.params.catjective)
	let r = await fetch(urlHead + req.params.catjective + '+cat' + urlTail)
	let jsonCats = await r.json()

	let cats = jsonCats.data.map(c=> c.images.fixed_height.url)
	res.json(cats)
}) 

app.use('/', router)
app.use('/public', express.static('public'))
app.listen(process.env.port || port)
console.log(`Witchcraft on aisle ${hostname}:${port}`)