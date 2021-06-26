import React,  { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useForm from '../../hooks/useForm';
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToResults } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchField = () => {
    const classes = useStyles();
    const history = useHistory()
    const [form, onChange, clear] = useForm([])
    const { setUsername} = useContext(GlobalStateContext)

    const onSubmitSearch = (e) => {
      e.preventDefault()
      clear()
      setUsername(form)
      goToResults(history, form)
    }

    return (

    <Paper component="form" className={classes.root} onSubmit={onSubmitSearch}>
      <InputBase
        className={classes.input}
        placeholder="Procurar usuário"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={onChange}
        value={form}
        required
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    )
}

export default SearchField