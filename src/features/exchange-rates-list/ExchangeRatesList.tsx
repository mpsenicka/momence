import { useExchangeRates } from './queries'

export const ExchangeRatesList = () => {
    const { data } = useExchangeRates()

    return data?.map((rat) => (
        <div style={{ marginTop: 30 }}>{rat.currency}</div>
    ))
}
