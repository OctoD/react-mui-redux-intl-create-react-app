import React from "react";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import FormActionBar from "./FormActionBar";

export interface IFormActionsProps {
  confirmDisabled?: boolean;
  confirmIcon?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  disabled?: boolean;
  onConfirm?(): any;
  onUndo?(): any;
  undoDisabled?: boolean;
  undoIcon?: React.ReactNode;
  undoLabel?: React.ReactNode;
}

export default function FormActions(props: IFormActionsProps) {
  const {
    confirmDisabled,
    confirmIcon,
    confirmLabel,
    disabled,
    onConfirm,
    onUndo,
    undoDisabled,
    undoIcon,
    undoLabel
  } = props;

  return (
    <FormActionBar>
      <Button
        disabled={disabled || undoDisabled}
        onClick={onUndo}
        variant="text"
      >
        {undoIcon}
        {undoLabel}
      </Button>
      <Button
        color="primary"
        disabled={disabled || confirmDisabled}
        onClick={onConfirm}
        variant="contained"
      >
        {confirmIcon}
        {confirmLabel}
      </Button>
    </FormActionBar>
  );
}

FormActions.defaultProps = {
  confirmLabel: (
    <FormattedMessage
      defaultMessage="Confirm"
      id="components.FormActions.defaultProps.confirm"
    />
  ),
  undoLabel: (
    <FormattedMessage
      defaultMessage="Undo"
      id="components.FormActions.defaultProps.undo"
    />
  )
} as Partial<IFormActionsProps>;
