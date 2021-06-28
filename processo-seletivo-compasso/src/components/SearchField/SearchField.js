import React,  { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useForm from '../../hooks/useForm';
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToResults } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { StyledInput } from './styled';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
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
      <StyledInput
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