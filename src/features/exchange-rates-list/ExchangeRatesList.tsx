import { Card } from '@/atomic/card'
import { useExchangeRates } from './queries'
import { getFlagFromCurrencyCode } from '@/utils/flagResolver'
import { Group } from '@/atomic/group'
import { Text } from '@/atomic/text'

export const ExchangeRatesList = () => {
    const { data } = useExchangeRates()

    return data?.map((rat) => (
        <Card style={{ marginTop: 15, marginBottom: 15 }}>
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
