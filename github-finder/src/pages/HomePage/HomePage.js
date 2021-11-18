import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import { HomeContainer } from "./styled";
import LogoButton from "../../components/LogoButton/LogoButton";

const HomePage = () => {
  return (
    <HomeContainer>
      <LogoButton />
      <SearchField />
    </HomeContainer>
  );
};

export default HomePage;
