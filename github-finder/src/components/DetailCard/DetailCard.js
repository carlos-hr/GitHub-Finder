import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { GridContainer, TitleContainer } from "./styled";
import { useHistory, useParams } from "react-router-dom";
import { getData } from "../../services/requests";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DetailCard = () => {
  const [localData, setLocalData] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const params = useParams();
  const { username, request } = params;
  
  useEffect(() => {
    getData(username, request, setLocalData, history);
  }, [history, request, username]);

  const renderData = localData.map((data) => {
    return (
      <Grid item xs={6} key={data.id}>
        <Paper className={classes.paper}>
          <strong>Nome do repositório:</strong> {data.name}
          <br />
          <strong>Linguagem: </strong> {data.language}
        </Paper>
      </Grid>
    );
  });

  const title = () => {
    if (params.request === "repos") {
      return <TitleContainer>Repositórios do usuário</TitleContainer>;
    } else if (params.request === "starred") {
      return <TitleContainer>Repositórios mais visitados</TitleContainer>;
    }
  };
  return (
    <div>
      <GridContainer container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{title()}</Paper>
        </Grid>
        {renderData}
      </GridContainer>
    </div>
  );
};

export default DetailCard;
