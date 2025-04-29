import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('Buenos dias')
})

app.get('/about', (req, res) => {
    res.send('Buenas noches')
})

app.listen(PORT, () => {
    console.log(`Tu servidor esta corriendo http://localhost:${PORT}`)
})
