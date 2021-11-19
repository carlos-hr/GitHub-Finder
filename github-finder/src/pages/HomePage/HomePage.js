import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import LogoButton from "../../components/LogoButton/LogoButton";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/pages/HomePage";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LogoButton />
      <SearchField />
    </Box>
  );
};

export default HomePage;
