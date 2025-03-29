import { Button } from '@/atomic/button'
import { Group } from '@/atomic/group'
import { routerCatalog } from '@/routerCatalog'
import { useLocation, useNavigate } from 'react-router'
import styled from 'styled-components'

export const Header = () => {
    const navigate = useNavigate()
    const loc = useLocation()
    return (
        <HeaderBody>
            <Group
                justify='space-between'
                style={{ width: '100%', padding: 16 }}
            >
                <Group spacing={16}>
                    <Button
                        variant={
                            loc.pathname !== routerCatalog.root
                                ? 'light'
                                : undefined
                        }
                        onClick={() => navigate(routerCatalog.root)}
                    >
                        List
                    </Button>
                    <Button
                        variant={
                            loc.pathname !== routerCatalog.exchange.root
                                ? 'light'
                                : undefined
                        }
                        onClick={() => navigate(routerCatalog.exchange.root)}
                    >
                        Exchange tool
                    </Button>
                </Group>
            </Group>
        </HeaderBody>
    )
}

const HeaderBody = styled.div`
    background: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    height: 60px;
    width: 100%;
    border-bottom: 1px solid #dee2e6;
    position: fixed;
    top: 0px;
`
