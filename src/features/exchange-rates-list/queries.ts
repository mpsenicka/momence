import { queryKeyCatalog } from '@/queryKeyCatalog'
import { useQuery } from '@tanstack/react-query'

export const useExchangeRates = () => {
    const data = useQuery({
        queryKey: queryKeyCatalog.exchangeRates.list(),
        queryFn: async () => {
            const res = await fetch(
                'https://momence.onrender.com/api/exchange-rates',
            )
            if (!res.ok) throw new Error('Failed to fetch exchange rates')

            return res.json()
        },
    })

    return data
}
