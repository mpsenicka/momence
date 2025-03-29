import { useExchangeRates } from './queries'

export const ExchangeRatesList = () => {
    const rates = useExchangeRates()
    console.log('🚀 ~ ExchangeRatesList ~ rates:', rates)
    return <div>exchange rates list</div>
}
