export const parseExchangeRates = (text) => {
    const lines = text.trim().split('\n')
    const dataLines = lines.slice(2) // Skip headers

    return dataLines.map((line) => {
        const [country, currency, amount, code, rate] = line.split('|')
        return {
            country,
            currency,
            amount: parseInt(amount, 10),
            code,
            rate: parseFloat(rate.replace(',', '.')), // Convert rate to number with dot decimal
        }
    })
}
