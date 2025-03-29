import { NumberInput } from '@/atomic/number-input'
import { Select } from '@/atomic/select-input'
import { useState } from 'react'
import { useExchangeRates } from '../exchange-rates-list/queries'
import { getFlagFromCurrencyCode } from '@/utils/flagResolver'
import { Text } from '@/atomic/text'
import { Stack } from '@/atomic/stack'
import { computeExchangeRate } from './utils'

export const ExchangeCurrency = () => {
    const [currency, setCurrency] = useState('')
    const [amount, setAmount] = useState<number | ''>(1)

    const { data, isLoading, isError } = useExchangeRates()

    if (isLoading || isError) {
        return null
    }

    const pickedCurrency = data?.find((rate) => rate.code === currency)

    return (
        <Stack align='center'>
            <NumberInput
                onChange={(v) =>
                    setAmount(typeof v === 'string' ? Number.parseInt(v) : v)
                }
                value={amount}
                min={0}
                style={{ width: 200 }}
            />
            <Text>🇨🇿 Czech crown</Text>
            <Text>is</Text>
            <Text size='xl' weight={600}>
                {computeExchangeRate(amount, pickedCurrency)}
            </Text>
            <Select
                style={{ width: 240 }}
                value={currency}
                onChange={setCurrency}
                placeholder='Pick a currency'
                data={
                    data?.map((rate) => ({
                        value: rate.code,
                        label: `${getFlagFromCurrencyCode(rate.code)} ${
                            rate.country
                        } ${rate.currency}`,
                    })) || []
                }
            />
        </Stack>
    )
}
