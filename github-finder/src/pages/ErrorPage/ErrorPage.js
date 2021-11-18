import React from "react";
import LogoButton from "../../components/LogoButton/LogoButton";
import { MainContainer } from "./styled";

const ErrorPage = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default ErrorPage;
