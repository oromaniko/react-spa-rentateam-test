import express from 'express'
import { products, categories } from './mydata.js'

const PORT = 3001
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.header({ 'Access-Control-Allow-Origin': '*' })
    next()
})

app.get('/categories', (req, res) => {
    try {
        res.json(categories)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.get('/products', (req, res) => {
    try {
        res.json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post('/basket', async (req, res) => {
    try {
        res.status(200).json({ id: Number(new Date()) })
    } catch (err) {
        res.status(500).json(err)
    }
})

async function startApp() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
