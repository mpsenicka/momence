const currencyToCountryMap: Record<string, string> = {
    AUD: 'AU',
    BRL: 'BR',
    BGN: 'BG',
    CAD: 'CA',
    CNY: 'CN',
    DKK: 'DK',
    EUR: 'EU', // not a real country, but you can map it to 'EU'
    HKD: 'HK',
    HUF: 'HU',
    ISK: 'IS',
    XDR: 'IM', // IMF – maybe fallback or custom flag
    INR: 'IN',
    IDR: 'ID',
    ILS: 'IL',
    JPY: 'JP',
    MYR: 'MY',
    MXN: 'MX',
    NZD: 'NZ',
    NOK: 'NO',
    PHP: 'PH',
    PLN: 'PL',
    RON: 'RO',
    SGD: 'SG',
    ZAR: 'ZA',
    KRW: 'KR',
    SEK: 'SE',
    CHF: 'CH',
    THB: 'TH',
    TRY: 'TR',
    GBP: 'GB',
    USD: 'US',
}

function countryCodeToFlagEmoji(code: string) {
    return code
        .toUpperCase()
        .replace(/./g, (char) =>
            String.fromCodePoint(127397 + char.charCodeAt(0)),
        )
}

export function getFlagFromCurrencyCode(currencyCode: string): string {
    const countryCode = currencyToCountryMap[currencyCode]
    if (!countryCode) return '🏳️' // fallback
    return countryCodeToFlagEmoji(countryCode)
}
