// Group.tsx
import React from 'react'
import styled from 'styled-components'

type GroupProps = {
    children: React.ReactNode
    spacing?: number | string
    align?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
    wrap?: boolean
    style?: React.CSSProperties
    className?: string
}

const StyledGroup = styled.div<{
    $spacing: number | string
    $align: string
    $justify: string
    $wrap: boolean
}>`
    display: flex;
    flex-direction: row;
    align-items: ${({ $align }) => `flex-${$align}`};
    justify-content: ${({ $justify }) =>
        $justify.replace('start', 'flex-start').replace('end', 'flex-end')};
    flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
    gap: ${({ $spacing }) =>
        typeof $spacing === 'number' ? `${$spacing}px` : $spacing};
`

export const Group: React.FC<GroupProps> = ({
    children,
    spacing = 8,
    align = 'center',
    justify = 'start',
    wrap = false,
    style,
    className,
}) => {
    return (
        <StyledGroup
            $spacing={spacing}
            $align={align}
            $justify={justify}
            $wrap={wrap}
            style={style}
            className={className}
        >
            {children}
        </StyledGroup>
    )
}
