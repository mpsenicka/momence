import express from 'express'
import cors from 'cors'

import { parseExchangeRates } from './utils.mjs'

const app = express()
const PORT = 3001

app.use(cors())

app.get('/api/exchange-rates', async (req, res) => {
    try {
        const response = await fetch(
            'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
        )

        if (!response.ok) {
            throw new Error(`ČNB responded with status ${response.status}`)
        }

        const text = await response.text()
        const parsed = parseExchangeRates(text)

        res.setHeader('Content-Type', 'application/json')
        res.status(200).send(JSON.stringify(parsed))
    } catch (err) {
        console.error('[Exchange Rate Error]', err)
        res.status(500).json({ error: 'Failed to fetch exchange rates' })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
