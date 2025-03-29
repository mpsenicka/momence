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

    return data?.map((rat) => (
        <Card style={{ marginTop: 15, marginBottom: 15 }} key={rat.code}>
            <Group style={{ width: '100%' }} justify='space-between'>
                <Text>
                    {`${getFlagFromCurrencyCode(rat.code)} ${rat.country} ${
                        rat.currency
                    }`}
                </Text>
                <Text>{`${rat.amount} ${rat.code} is ${rat.rate} CZK`}</Text>
            </Group>
        </Card>
    ))
}
