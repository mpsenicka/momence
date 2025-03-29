import { expect, test, describe } from 'vitest'

import { computeExchangeRate } from '@/features/exchange-currency/utils'

describe('computeExchangeRate', () => {
    test('returns 0.000 when amount is empty', () => {
        expect(computeExchangeRate('', { amount: 1, rate: 23.127 })).toBe(
            '0.00',
        )
    })

    test('converts CZK to USD correctly', () => {
        const result = computeExchangeRate(1, { amount: 1, rate: 23.127 })
        expect(result).toBe('0.04')
    })

    test('handles currencies where amount is 100 (like HUF)', () => {
        const result = computeExchangeRate(100, { amount: 100, rate: 6.19 }) // 1 HUF = 0.0619
        expect(result).toBe((100 / (6.19 / 100)).toFixed(2))
    })
})
