import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { CheckboxProps, FormGroupProps } from "@mui/material"

export interface ICheckboxProps extends FormGroupProps {
  label: string
  checked: boolean
}

export default function CheckboxComponent({ label, checked, ...rest }: ICheckboxProps) {
  return (
    <FormGroup {...rest}>
      <FormControlLabel checked={checked} control={<Checkbox defaultChecked />} label={label} />
    </FormGroup>
  )
}
