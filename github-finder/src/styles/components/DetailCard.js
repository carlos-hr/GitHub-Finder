import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    width: "70vw",
    marginTop: "1vh",
  },
  gridItem: {
    height: "100px",
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: "bold",
    fontSize: "20",
  },
}));
