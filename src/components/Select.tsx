import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MUISelect, { SelectProps } from "@material-ui/core/Select";

export interface ISelectProps extends Partial<SelectProps> {
  label?: React.ReactNode;
}

export default function Select(props: ISelectProps) {
  const { label, ...otherprops } = props;

  return (
    <FormControl fullWidth variant="outlined">
      {label && <InputLabel>{label}</InputLabel>}
      <MUISelect {...otherprops} />
    </FormControl>
  );
}
