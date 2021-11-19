import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import SearchedCard from "../../components/SearchedCard/SearchedCard";
import LogoButton from "../../components/LogoButton/LogoButton";
import { Box } from "@material-ui/core";

const SearchResultPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={8}
    >
      <LogoButton />
      <SearchField />
      <SearchedCard />
    </Box>
  );
};

export default SearchResultPage;
