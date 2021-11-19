import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import LogoButton from "../../components/LogoButton/LogoButton";
import { Box } from "@material-ui/core";

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="41vh"
    >
      <LogoButton />
      <SearchField />
    </Box>
  );
};

export default HomePage;
