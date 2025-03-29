import { createBrowserRouter, Outlet } from 'react-router'
import { ExchangeRatesList } from './features/exchange-rates-list'
import { ExchangeCurrency } from './features/exchange-currency'
import { Header } from './components/header'
import { Content } from './components/content'

export const router = createBrowserRouter([
    {
        Component: () => (
            <>
                <Header />
                <Content>
                    <Outlet />
                </Content>
            </>
        ),
        children: [
            {
                path: '/',
                Component: ExchangeRatesList,
            },
            {
                path: '/exchange',
                Component: ExchangeCurrency,
            },
        ],
    },
])
