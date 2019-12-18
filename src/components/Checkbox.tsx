import React from "react";
import MUICheckbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

export interface ICheckboxProps extends Partial<CheckboxProps> {}

export default function Checkbox(props: ICheckboxProps) {
  const { children, ...otherprops } = props;

  return (
    <label>
      <MUICheckbox {...otherprops} checked={Boolean(props.value)} />
      <Typography variant="caption">{children}</Typography>
    </label>
  );
}
