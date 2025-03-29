import React from 'react'
import styled from 'styled-components'

type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    value: string
    onChange: (value: string) => void
    data: SelectOption[]
    placeholder?: string
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
`

const StyledSelect = styled.select`
    appearance: none;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
    color: #212529;
    background-color: white;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23666" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
    padding-right: 32px;
    cursor: pointer;

    &:focus {
        border-color: #228be6;
        outline: none;
        box-shadow: 0 0 0 1px #228be6;
    }

    &:disabled {
        background-color: #f1f3f5;
        cursor: not-allowed;
        color: #adb5bd;
    }
`

export const Select: React.FC<SelectProps> = ({
    value,
    onChange,
    data,
    placeholder = 'Select option',
    disabled = false,
    className,
    style,
}) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledSelect
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            >
                <option value='' disabled hidden>
                    {placeholder}
                </option>
                {data.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </StyledSelect>
        </Wrapper>
    )
}
