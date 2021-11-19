import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: "5vh",
    borderRadius: "50px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "30vw",
  },
  iconButton: {
    padding: 10,
  },
}));
