import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import SearchedCard from "../../components/SearchedCard/SearchedCard";
import LogoButton from "../../components/LogoButton/LogoButton";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/pages/SearchResultPage";

const SearchResultPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LogoButton />
      <SearchField />
      <SearchedCard />
    </Box>
  );
};

export default SearchResultPage;
