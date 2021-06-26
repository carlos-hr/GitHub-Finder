import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GlobalStateContext from '../../global/GlobalStateContext';
import { P, Imagem, StyledCard } from './styled';
import { goToDetails } from '../../routes/coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { getData } from '../../services/requests';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 270,
  },
});

const SearchedCard = () => {
    const classes = useStyles();
    const {user, setUsername, setUserData} = useContext(GlobalStateContext)
    const params = useParams()
    const history = useHistory()

    const onClickDetail = (username, request, setUserData, history ) => {
      getData(username, request, setUserData, history)
    }

    const renderUser = () => {
    if (!user) {
      setUsername(params.username)
      if (user === false) {
        return (
          <div>
            <P>Usuário não encontrado</P>
          </div>
        )
      } 
    } else if (user) {
        return (
          <StyledCard className={classes.root}>
            <CardActionArea onClick={() => goToDetails(history, user.login)}>
              <CardMedia className={classes.media}>
                <Imagem src={user.avatar_url} 
                    alt="foto de perfil"
                />
                
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.name} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {user.bio !== null ? user.bio : user.login}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => onClickDetail(params.username, "repos", setUserData, history)}>
                Repos
              </Button>
              <Button size="small" color="primary" onClick={() => onClickDetail(params.username, "starred", setUserData, history)}>
                Starred
              </Button>
            </CardActions>
          </StyledCard>
        )
      }  
    }   

  return (
    <div>
        {renderUser()}
    </div>
  );
}

export default SearchedCard