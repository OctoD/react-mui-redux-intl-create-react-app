import logrocket from "logrocket";

if (process.env.NODE_ENV === "production") {
  logrocket.init(process.env.REACT_APP_LOGROCKET_APPID!);
}
