import express from 'express'

const app = express()
const PORT = 3001

app.get('/api/exchange-rates', async (req, res) => {
    try {
        const response = await fetch(
            'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
        )
        const text = await response.text()
        res.setHeader('Content-Type', 'text/plain')
        res.send(text)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch exchange rates' })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
