import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory, useParams } from "react-router-dom";
import { getData, getUser } from "../../services/requests";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../styles/SearchedCard";

const SearchedCard = () => {
  const { user, setUser, setUserData } = useContext(GlobalStateContext);
  const params = useParams();
  const history = useHistory();
  const { username } = params;
  const classes = useStyles();
  const onClickDetail = (username, request, setUserData, history) => {
    getData(username, request, setUserData, history);
  };

  useEffect(() => {
    getUser(username, setUser);
  }, [username, setUser]);

  const renderUser = () => {
    if (user === null) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    } else if (user) {
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
        <div>
          <Typography component="p" className={classes.p}>
            Usuário não encontrado
          </Typography>
        </div>
      );
    }
  };

  return <div>{renderUser()}</div>;
};

export default SearchedCard;
