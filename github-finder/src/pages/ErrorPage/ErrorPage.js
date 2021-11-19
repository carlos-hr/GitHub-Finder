import { Box } from "@material-ui/core";
import React from "react";
import LogoButton from "../../components/LogoButton/LogoButton";
import { useStyles } from "../../styles/pages/ErrorPage";

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LogoButton />
      <img
        src="https://media1.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
        alt="Erro"
      />
    </Box>
  );
};

export default ErrorPage;
