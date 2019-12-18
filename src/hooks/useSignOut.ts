import { useDispatch } from "react-redux";
import actions from "@actions";

export default function useSignout() {
  const dispatch = useDispatch();

  return () => actions.user.signOut()(dispatch);
}
