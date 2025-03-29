import React from 'react'
import styled from 'styled-components'

type NumberInputProps = {
    value: number | '' | null
    onChange: (value: number | '') => void
    min?: number
    max?: number
    step?: number
    placeholder?: string
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ced4da;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    max-width: 200px;
    background-color: white;

    &:focus-within {
        border-color: #228be6;
        box-shadow: 0 0 0 1px #228be6;
    }
`

const StyledInput = styled.input`
    flex: 1;
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    outline: none;
    min-width: 0;

    &::placeholder {
        color: #adb5bd;
    }
`

export const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onChange,
    min,
    max,
    step = 1,
    placeholder = '',
    disabled = false,
    className,
    style,
}) => {
    const parseValue = (val: string) => {
        const num = parseFloat(val)
        return isNaN(num) ? '' : num
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseValue(e.target.value))
    }

    return (
        <Wrapper className={className} style={style}>
            <StyledInput
                type='number'
                value={value ?? ''}
                onChange={handleInputChange}
                min={min}
                max={max}
                step={step}
                placeholder={placeholder}
                disabled={disabled}
            />
        </Wrapper>
    )
}
