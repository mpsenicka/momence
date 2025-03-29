import React from 'react'
import styled from 'styled-components'

type StackProps = {
    children: React.ReactNode
    spacing?: number | string
    align?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
    style?: React.CSSProperties
    className?: string
}

const StyledStack = styled.div<
    Required<Pick<StackProps, 'spacing' | 'align' | 'justify'>>
>`
    display: flex;
    flex-direction: column;
    gap: ${({ spacing }) =>
        typeof spacing === 'number' ? `${spacing}px` : spacing};
    align-items: ${({ align }) => {
        switch (align) {
            case 'start':
                return 'flex-start'
            case 'end':
                return 'flex-end'
            default:
                return align
        }
    }};
    justify-content: ${({ justify }) => {
        switch (justify) {
            case 'start':
                return 'flex-start'
            case 'end':
                return 'flex-end'
            default:
                return justify
        }
    }};
`

export const Stack: React.FC<StackProps> = ({
    children,
    spacing = 12,
    align = 'stretch',
    justify = 'start',
    style,
    className,
}) => {
    return (
        <StyledStack
            spacing={spacing}
            align={align}
            justify={justify}
            style={style}
            className={className}
        >
            {children}
        </StyledStack>
    )
}
