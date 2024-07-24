import { TextField } from '@mui/material'
import styled from 'styled-components'
import React from 'react'

export interface CTextFieldPropType {
  direction?: 'right' | 'left'
  labelDirection?: 'right' | 'left'
  labelDirectionOverride?: boolean
  label: string
  placeholder: string
  value?: any
  defaultValue?: any
  id?: string
  name?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'file'
  helperText?: string
  hasError?: boolean
  background?: string
  paddingBottom?: string
  multiline?: boolean
  marginBottom?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  inputRef?: any
  onKeyDown?: (event: any) => void
  rows?: number
  disabled?: boolean
  errorPlacement?: 'top' | 'right' | 'bottom' | 'left'
  InputProps?: any
  setValue?: any
  marginTop?: string
}

interface CTextFieldStyleType {
  $marginBottom: string
  $paddingBottom: string
  $background?: string | null
  $direction?: 'left' | 'right'
  $labelDirection?: 'left' | 'right'
  $labelDirectionOverride?: boolean
  $marginTop?: string
}

export const CTextFieldStyle = styled(TextField)<CTextFieldStyleType>`
  && {
    font-family: 'Poppins',sans-serif;
    margin-bottom: ${props => `${props.$marginBottom}`};
    border-radius: 12px;
  }

  && .MuiInputBase-root {
    background: ${({ theme, $background }) =>
      $background != null ? theme[$background] : theme.blue80};
    border: 1px solid rgb(133, 133, 133);
    border-radius: 8px;
    white-space: pre-line;
    padding-bottom: ${props => `${props.$paddingBottom}`};

    &:before,
    &:after {
      display: none;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.blue100};
    }

    &.Mui-error {
      border: 1px solid ${({ theme }) => theme.red100};
    }

    &.Mui-focused {
      border: 1px solid ${({ theme }) => theme.blue100};
    }

    &.Mui-disabled {
      opacity: 0.5;
    }
  }

  && .MuiInputBase-input {
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: ${({ $direction }) =>
      $direction === 'left' ? 'left' : 'right'};
    direction: ${({ $direction }) => ($direction === 'left' ? 'ltr' : 'rtl')};
    color: ${({ theme }) => theme.black100};
    margin-top: ${({ $marginTop }) => $marginTop};

    &.Mui-disabled {
      color: ${({ theme }) => theme.black50} !important;
      -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
    }

    &:-internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: ${({ theme }) => theme.black3} !important;
      color: ${({ theme }) => theme.black80} !important;
      border-radius: 12px !important;
    }
  }

  && .MuiInputLabel-root {
    font-family: 'Poppins',sans-serif;
    color: ${({ theme }) => theme.black50};
    left: ${({ $labelDirection }) => ($labelDirection === 'left' ? 0 : 'auto')};
    right: ${({ $labelDirection }) =>
      $labelDirection === 'left' ? 'auto' : 0};
    transform-origin: ${({ $labelDirection }) =>
      $labelDirection === 'left' ? 'top left' : 'top right'};
    transform: ${({ $labelDirection }) =>
      $labelDirection === 'left'
        ? 'translate(12px, 19px) scale(1)'
        : 'translate(-12px, 16px) scale(1)'};
    font-family: Inter;
    font-size: 14px;

    &.Mui-focused {
      color: ${({ theme }) => theme.blue90};
    }
  }

  && .MuiInputLabel-root.Mui-focused,
  && .MuiInputLabel-root.MuiInputLabel-shrink {
    font-family: 'Poppins',sans-serif;
    transform: ${({ $labelDirection }) =>
      $labelDirection === 'left'
        ? 'translate(12px, 7px) scale(0.75)'
        : 'translate(-12px, 7px) scale(0.75)'};
  }

  && .MuiFormHelperText-root {
    text-align: left;
    font-family: 'Poppins',sans-serif;
    font-weight: 500;
    font-size: 10px;
    color: ${({ theme }) => theme.red100};
    margin-left: 8px;
    margin-top: 8px;
  }

  && .MuiSvgIcon-root {
    right: auto;
    left: 8px;
    color: ${({ theme }) => theme.black50};
  }

  && .MuiNativeSelect-select,
  && .MuiSelect-select {
    padding-right: 12px !important;
    padding-left: 32px !important;
  }
`

export const CTextField: React.ComponentType<CTextFieldPropType> = (
  props: CTextFieldPropType
) => {
  const {
    hasError = false,
    marginBottom = '0',
    paddingBottom = '0',
    direction = 'left',
    labelDirection = 'left',
    labelDirectionOverride = true,
    disabled = false,
    helperText,
    background = 'gray70',
    setValue,
    marginTop = '0',
    ...other
  } = props

  return (
    <>
      <CTextFieldStyle
        fullWidth
        error={
          helperText != null
            ? helperText.length > 0 && helperText !== ''
            : hasError
        }
        variant="filled"
        $marginBottom={marginBottom}
        $direction={direction}
        $labelDirection={labelDirection}
        $labelDirectionOverride={labelDirectionOverride}
        $background={background}
        $paddingBottom={paddingBottom}
        disabled={disabled}
        $marginTop={marginTop}
        {...other}
      />
    </>
  )
}
