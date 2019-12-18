import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@state";
import actions from "@actions";

function selector(state: ApplicationState) {
  return state.ui.asideopen;
}

export default function useAside() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selector);

  return {
    isOpen,
    close: () => dispatch(actions.ui.closeaside()),
    open: () => dispatch(actions.ui.openaside()),
    toggle: () => dispatch(actions.ui.toggleaside())
  };
}
