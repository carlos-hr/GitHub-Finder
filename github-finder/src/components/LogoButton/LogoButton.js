import React, { useContext } from "react";
import { goToHome } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import GithubIcon from "../../assets/GithubIcon";
import { Box } from "@material-ui/core";
import { secondaryColor } from "../../constants/colors";

const LogoButton = () => {
  const history = useHistory();
  const { setUser } = useContext(GlobalStateContext);

  const onClickLogo = (history, setUser) => {
    goToHome(history);
    setUser(null);
  };

  return (
    <Box
      alignItems="center"
      width="30%"
      display="flex"
      color={secondaryColor}
      fontSize={40}
      fontWeight="fontWeightBold"
      justifyContent="center"
      onClick={() => onClickLogo(history, setUser)}
    >
      <Box>
        <GithubIcon width="100" height="100" />
      </Box>
      <Box pl={5}>GitHub Finder</Box>
    </Box>
  );
};

export default LogoButton;
