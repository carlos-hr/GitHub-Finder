import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    background: {
      default: primaryColor,
    },
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: secondaryColor,
    },
    // text: {
    //     primary: secondaryColor,
    // }
  },
});

export default theme;
