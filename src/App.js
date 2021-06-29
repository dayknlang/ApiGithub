import React from "react";
import Routes from "./router/Routes";
import { ThemeProvider } from "@material-ui/styles";
import {Theme} from "./constants/Theme";
import "./index.css";

export const App = () => {
  return (
    <ThemeProvider theme = {Theme}>
        <Routes/>
    </ThemeProvider>
  )
}

export default App;