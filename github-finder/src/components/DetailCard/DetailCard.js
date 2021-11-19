import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles/components/DetailCard";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getData } from "../../services/requests";

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
      <Grid item xs={12} sm={6} key={data.id}>
        <Paper className={classes.gridItem}>
          <strong>Nome do repositório:</strong> {data.name}
          <br />
          <strong>Linguagem: </strong> {data.language}
        </Paper>
      </Grid>
    );
  });

  const title = () => {
    if (request === "repos") {
      return <Typography className={classes.title} variant="h5">Repositórios do usuário</Typography>;
    } else if (request === "starred") {
      return <Typography className={classes.title} variant="h5">Repositórios mais visitados</Typography>;
    }
  };
  return (
    <Grid className={classes.grid} container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>{title()}</Paper>
      </Grid>
      {renderData}
    </Grid>
  );
};

export default DetailCard;
