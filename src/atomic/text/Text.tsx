import React from 'react'
import styled, { css } from 'styled-components'

type TextProps = {
    children: React.ReactNode
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    weight?: number
    color?: string
    align?: 'left' | 'center' | 'right' | 'justify'
    lineClamp?: number
    italic?: boolean
    underline?: boolean
    style?: React.CSSProperties
    className?: string
}

const sizeMap: Record<NonNullable<TextProps['size']>, string> = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
}

const StyledText = styled.p<
    Required<Omit<TextProps, 'children' | 'as' | 'style' | 'className'>>
>`
    margin: 0;
    font-size: ${({ size }) => sizeMap[size]};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
    text-align: ${({ align }) => align};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

    ${({ lineClamp }) =>
        lineClamp > 0 &&
        css`
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: ${lineClamp};
            -webkit-box-orient: vertical;
        `}
`

export const Text: React.FC<TextProps> = ({
    children,
    size = 'md',
    weight = 400,
    color = 'inherit',
    align = 'left',
    lineClamp = 0,
    italic = false,
    underline = false,
    style,
    className,
}) => {
    return (
        <StyledText
            size={size}
            weight={weight}
            color={color}
            align={align}
            lineClamp={lineClamp}
            italic={italic}
            underline={underline}
            style={style}
            className={className}
        >
            {children}
        </StyledText>
    )
}
