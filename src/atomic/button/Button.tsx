import styled, { css } from 'styled-components'

type Variant = 'filled' | 'outline' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: Variant
    color?: string
    fullWidth?: boolean
    radius?: number | string
    size?: Size
}

const colorMap = {
    blue: {
        base: '#228be6',
        hover: '#1c7ed6',
        active: '#1971c2',
        light: '#e7f5ff',
        border: '#228be6',
        text: 'white',
    },
}

const sizeMap = {
    sm: {
        height: '30px',
        padding: '0 12px',
        fontSize: '13px',
    },
    md: {
        height: '36px',
        padding: '0 16px',
        fontSize: '14px',
    },
    lg: {
        height: '42px',
        padding: '0 20px',
        fontSize: '16px',
    },
}

const StyledButton = styled.button<Required<ButtonProps>>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: ${({ radius }) =>
        typeof radius === 'number' ? `${radius}px` : radius};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    height: ${({ size }) => sizeMap[size].height};
    padding: ${({ size }) => sizeMap[size].padding};
    font-size: ${({ size }) => sizeMap[size].fontSize};
    cursor: pointer;
    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease;

    ${({ variant, color }) => {
        const c = colorMap[color as keyof typeof colorMap]
        if (!c) return ''

        if (variant === 'filled') {
            return css`
                background-color: ${c.base};
                color: ${c.text};
                border: none;

                &:hover {
                    background-color: ${c.hover};
                }

                &:active {
                    background-color: ${c.active};
                }
            `
        }

        if (variant === 'outline') {
            return css`
                background-color: transparent;
                color: ${c.base};
                border: 1px solid ${c.border};

                &:hover {
                    background-color: ${c.light};
                }

                &:active {
                    background-color: ${c.hover};
                    color: white;
                }
            `
        }

        if (variant === 'light') {
            return css`
                background-color: ${c.light};
                color: ${c.base};
                border: none;

                &:hover {
                    background-color: ${c.hover};
                    color: white;
                }
            `
        }

        return ''
    }}

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const Button = ({
    children,
    variant = 'filled',
    color = 'blue',
    fullWidth = false,
    radius = 4,
    size = 'md',
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton
            variant={variant}
            color={color}
            fullWidth={fullWidth}
            radius={radius}
            size={size}
            {...rest}
        >
            {/* @ts-expect-error - for some reason there's type mismatch */}
            {children}
        </StyledButton>
    )
}
