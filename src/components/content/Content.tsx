import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Content = ({ children }: PropsWithChildren) => (
    <ContentBody>{children}</ContentBody>
)

const ContentBody = styled.div`
    margin-top: 60px;
    padding: 16px;
`
