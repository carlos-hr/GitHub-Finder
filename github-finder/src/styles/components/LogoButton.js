import { makeStyles } from "@material-ui/core";
import { secondaryColor } from "../colors";

export const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold",
    role: "button",
    color: `${secondaryColor}`,
    width: "30%",
  },
}));
