type ExchangeRate = {
    amount: number
    rate: number
}

export const computeExchangeRate = (
    amount: number | '',
    rate?: ExchangeRate,
): string => {
    if (!rate || !amount) return '0.00'

    const normalizedRate = rate.rate / rate.amount
    const result = amount / normalizedRate
    return result.toFixed(2)
}
