import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

const lightTan = "#ede7d5";
const darkTan = "#d4cebe";

const theme = createTheme({
  palette: {
    primary: {
      main: lightTan,
    },
    secondary: {
      main: darkTan,
    },
  },
});

export default theme;
