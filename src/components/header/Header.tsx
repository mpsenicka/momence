import { Button } from '@/atomic/button'
import { Group } from '@/atomic/group'
import styled from 'styled-components'

export const Header = () => {
    return (
        <HeaderBody>
            <Group
                justify='space-between'
                style={{ width: '100%', padding: 16 }}
            >
                <Group spacing={16}>
                    <Button>List</Button>
                    <Button variant='light'>Exchange tool</Button>
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
