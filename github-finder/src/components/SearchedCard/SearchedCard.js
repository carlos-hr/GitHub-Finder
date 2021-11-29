import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory, useParams } from "react-router-dom";
import { getData } from "../../services/requests";
import Alert from "@material-ui/lab/Alert";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../styles/components/SearchedCard";

const SearchedCard = () => {
  const { user, setUserData, setUsername } = useContext(GlobalStateContext);
  const params = useParams();
  const history = useHistory();
  const { username } = params;
  const classes = useStyles();
  const onClickDetail = (username, request, setUserData, history) => {
    getData(username, request, setUserData, history);
  };

  useEffect(() => {
    setUsername(username);
  }, [username, setUsername]);

  const renderUser = () => {
    if (user === null) {
      return (
        <Box className={classes.loader}>
          <CircularProgress color="secondary" size={60} />
        </Box>
      );
    } else if (user && user.avatar_url) {
      return (
        <Card className={classes.card}>
          <CardMedia>
            <img src={user.avatar_url} alt="foto de perfil" width="300" />
          </CardMedia>
          <CardContent>
            <Typography className={classes.name} variant="h5">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.bio !== null ? user.bio : user.login}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                onClickDetail(username, "repos", setUserData, history)
              }
            >
              Repos
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                onClickDetail(username, "starred", setUserData, history)
              }
            >
              Starred
            </Button>
          </CardActions>
        </Card>
      );
    } else if (user === false) {
      return (
        <Box>
          <Alert severity="error" className={classes.p}>
            Usuário não encontrado
          </Alert>
        </Box>
      );
    }
  };

  return <Box>{renderUser()}</Box>;
};

export default SearchedCard;
