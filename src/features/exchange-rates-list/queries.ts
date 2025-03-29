import { queryKeyCatalog } from '@/queryKeyCatalog'
import { useQuery } from '@tanstack/react-query'
import { parseExchangeRates } from './utils'

export const useExchangeRates = () => {
    const data = useQuery({
        queryKey: queryKeyCatalog.exchangeRates.list(),
        queryFn: async () => {
            const res = await fetch(
                'https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
            )
            const text = await res.text()
            return parseExchangeRates(text)
        },
    })

    return data
}
