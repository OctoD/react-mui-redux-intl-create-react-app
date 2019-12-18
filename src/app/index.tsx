import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PersonaBar from "../components/PersonaBar";
import SplashScreen from "./Account/components/SplashScreen";
import RouteMapper from "./RouteMapper";
import store from "../store";
import theme from "../theme";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const languages: any = {
  en: require("../translations/locales/en.json"),
  it: require("../translations/locales/it.json")
};

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <IntlProvider
          defaultLocale="en"
          locale={navigator.language}
          messages={languages[document.querySelector("html")!.lang]}
        >
          <BrowserRouter>
            <Provider store={store}>
              <PersonaBar />
              <SplashScreen />
              <RouteMapper />
            </Provider>
          </BrowserRouter>
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}
