import React, { useContext } from "react";
import { LogoContainer } from "./styled";
import { goToHome } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import GithubIcon from "../../assets/GithubIcon";

const LogoButton = () => {
  const history = useHistory();
  const { setUser } = useContext(GlobalStateContext);

  const onClickLogo = (history, setUser) => {
    goToHome(history);
    setUser(null);
  };

  return (
    <LogoContainer onClick={() => onClickLogo(history, setUser)}>
      <GithubIcon  width="150"/>
      GitHub Finder
    </LogoContainer>
  );
};

export default LogoButton;
