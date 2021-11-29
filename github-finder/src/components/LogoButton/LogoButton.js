import React, { useContext } from "react";
import { goToHome } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import GithubIcon from "../../assets/GithubIcon";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/components/LogoButton";

const LogoButton = () => {
  const history = useHistory();
  const classes = useStyles()
  const { setUser } = useContext(GlobalStateContext);
  
  const onClickLogo = (history, setUser) => {
    goToHome(history);
    setUser(null);
  };

  return (
    <Box
      className={classes.box}
      style={{ cursor: "pointer" }}
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
