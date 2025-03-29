import { Card } from '@/atomic/card'
import { useExchangeRates } from './queries'
import { getFlagFromCurrencyCode } from '@/utils/flagResolver'
import { Group } from '@/atomic/group'
import { Text } from '@/atomic/text'

export const ExchangeRatesList = () => {
    const { data, isLoading, isError } = useExchangeRates()

    if (isLoading || isError) {
        return null
    }

    return data?.map((rate) => (
        <Card style={{ marginTop: 15, marginBottom: 15 }} key={rate.code}>
            <Group style={{ width: '100%' }} justify='space-between'>
                <Text>
                    {`${getFlagFromCurrencyCode(rate.code)} ${rate.country} ${
                        rate.currency
                    }`}
                </Text>
                <Text>{`${rate.amount} ${rate.code} is ${rate.rate} CZK`}</Text>
            </Group>
        </Card>
    ))
}
