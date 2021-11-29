import React, { useContext } from "react";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToResults } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../styles/components/SearchField";

const SearchField = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, onChange, clear] = useForm([]);
  const { setUser, setUsername } = useContext(GlobalStateContext);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setUser(null);
    setUsername(form);
    goToResults(history, form);
    clear();
  };

  const clearField = () => {
    clear();
  };
  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmitSearch}>
      <InputBase
        className={classes.input}
        placeholder="Procurar usuário"
        inputProps={{ "aria-label": "search user" }}
        onChange={onChange}
        value={form}
        required
      />
      <IconButton onClick={clearField} className={classes.iconButton}>
        <CloseIcon />
      </IconButton>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
