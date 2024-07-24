import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

export interface CTextFieldPropType {
  direction?: "right" | "left";
  labelDirection?: "right" | "left";
  labelDirectionOverride?: boolean;
  label: string;
  placeholder: string;
  value?: any;
  defaultValue?: any;
  id?: string;
  name?: string;
  type?: "text" | "email" | "tel" | "password" | "number" | "file";
  helperText?: string;
  hasError?: boolean;
  background?: string;
  paddingBottom?: string;
  marginBottom?: string;
  onChange?: any;
  rows?: number;
  disabled?: boolean;
  errorPlacement?: "top" | "right" | "bottom" | "left";
  setValue?: any;
  marginTop?: string;
  items: Array<{ name: string; value: string; selected: boolean }>;
}

interface CTextFieldStyleType {
  $marginBottom: string;
  $paddingBottom: string;
  $background?: string | null;
  $direction?: "left" | "right";
  $labelDirection?: "left" | "right";
  $labelDirectionOverride?: boolean;
  $marginTop?: string;
}

export const CSelectFieldStyle = styled(Select)<CTextFieldStyleType>`
  & {
    font-family: "Poppins", sans-serif;
    margin-bottom: ${(props) => `${props.$marginBottom}`};
    border-radius: 12px;
  }

  .MuiInputBase-root-MuiFilledInput-root-MuiSelect-root::before {
    border: 1px solid ${({ theme }) => theme.blue90} !important;
  }

  .MuiInputBase-root-MuiFilledInput-root-MuiSelect-root {
    background: ${({ theme, $background }) =>
      $background != null ? theme[$background] : theme.blue80};
    border: 1px solid ${({ theme }) => theme.blue90} !important;
    border-radius: 8px;
    white-space: pre-line;
    padding-bottom: ${(props) => `${props.$paddingBottom}`};

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

  & .MuiInputBase-input {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: ${({ $direction }) =>
      $direction === "left" ? "left" : "right"};
    direction: ${({ $direction }) => ($direction === "left" ? "ltr" : "rtl")};
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

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.black50};
    left: ${({ $labelDirection }) => ($labelDirection === "left" ? 0 : "auto")};
    right: ${({ $labelDirection }) =>
      $labelDirection === "left" ? "auto" : 0};
    transform-origin: ${({ $labelDirection }) =>
      $labelDirection === "left" ? "top left" : "top right"};
    transform: ${({ $labelDirection }) =>
      $labelDirection === "left"
        ? "translate(12px, 19px) scale(1)"
        : "translate(-12px, 16px) scale(1)"};
    font-family: Inter;
    font-size: 14px;

    &.Mui-focused {
      color: ${({ theme }) => theme.blue90};
    }
  }

  & .MuiInputLabel-root.Mui-focused,
  & .MuiInputLabel-root.MuiInputLabel-shrink {
    transform: ${({ $labelDirection }) =>
      $labelDirection === "left"
        ? "translate(12px, 7px) scale(0.75)"
        : "translate(-12px, 7px) scale(0.75)"};
  }

  & .MuiFormHelperText-root {
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 10px;
    color: ${({ theme }) => theme.red100};
    margin-left: 8px;
    margin-top: 8px;
  }

  & .MuiSvgIcon-root {
    right: auto;
    left: 8px;
    color: ${({ theme }) => theme.black50};
  }

  & .MuiNativeSelect-select,
  & .MuiSelect-select {
    padding-right: 12px !important;
    padding-left: 32px !important;
  }
`;

export const CSelectField: React.ComponentType<CTextFieldPropType> = (
  props: CTextFieldPropType
) => {
  const [border, setBorder] = useState("1px solid transparent");
  useEffect(() => {
    if (props.hasError) {
      setBorder("1px solid red");
    } else {
      setBorder("1px solid transparent");
    }
  }, [props.hasError]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        style={{
          width: "100%",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.06)",
          border: border,
        }}
        label={props.label}
        defaultValue={
          props.value === "female" ? props.items[1].value : props.items[0].value
        }
        onChange={props.onChange}
      >
        {props.items.map((item) => (
          <MenuItem value={item.value} selected={item.selected}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
