import React from "react";
import { DetailsContainer } from "./styled";
import DetailCard from "../../components/DetailCard/DetailCard";
import LogoButton from "../../components/LogoButton/LogoButton";

const DetailsPage = () => {
  return (
    <DetailsContainer>
      <LogoButton />
      <DetailCard />
    </DetailsContainer>
  );
};

export default DetailsPage;
