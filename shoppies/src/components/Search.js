import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    props.search(searchTerm);
  }

  const resetInputField = () => {
    setSearchTerm("")
  }

  const submitSearch = (e) => {
    e.preventDefault();
    props.search(searchTerm);
    resetInputField();
  }

  const useStyles = makeStyles((theme) => ({
    form: {
      padding: '10px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 800,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize: '1.3rem',
    },
    iconButton: {
      padding: 10,
    },
  }));

  const classes = useStyles();

  return (
      <Paper component="form" className={classes.form}>
        <InputBase
          className={classes.input}
          placeholder="Search for your favourite movie!"
          inputProps={{ 'aria-label': 'search omdb' }}
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={submitSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

export default Search;