import './App.css'
import { ExchangeRatesList } from '@/features/exchange-rates-list'
import { Header } from '@/components/header'
import { Content } from '@/components/content'

function App() {
    return (
        <>
            <Header />
            <Content>
                <ExchangeRatesList />
            </Content>
        </>
    )
}

export default App
