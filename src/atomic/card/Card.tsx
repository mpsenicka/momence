import styled, { css } from 'styled-components'

type Shadow = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    padding?: number | string
    radius?: number | string
    shadow?: Shadow
    withBorder?: boolean
}

const shadowMap: Record<Shadow, string> = {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
    md: '0 4px 8px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.15)',
}

const StyledCard = styled.div<{
    $padding: string
    $radius: string
    $shadow: Shadow
    $withBorder: boolean
}>`
    background-color: white;
    padding: ${({ $padding }) => $padding};
    border-radius: ${({ $radius }) => $radius};
    box-shadow: ${({ $shadow }) => shadowMap[$shadow]};
    ${({ $withBorder }) =>
        $withBorder &&
        css`
            border: 1px solid #eaeaea;
        `}
`

export const Card = ({
    children,
    padding = '16px',
    radius = '8px',
    shadow = 'sm',
    withBorder = true,
    ...rest
}: CardProps) => {
    return (
        <StyledCard
            $padding={typeof padding === 'number' ? `${padding}px` : padding}
            $radius={typeof radius === 'number' ? `${radius}px` : radius}
            $shadow={shadow}
            $withBorder={withBorder}
            {...rest}
        >
            {children}
        </StyledCard>
    )
}
