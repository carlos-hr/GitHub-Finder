import React from 'react';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DetailCard = () => {
    const {userData} = useContext(GlobalStateContext)
    const classes = useStyles();

    const datas = userData.map((data) => {
        console.log(data)
        return (
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    Nome do repositório: {data.name}
                    <br/>
                    Linguagem: {data.language}
                </Paper>
            </Grid>
        )
    })
    console.log("userData", userData)
    return (
        <div>
            <Grid container spacing={2}>
                {datas}
            </Grid>
        </div>
    )
}

export default DetailCard