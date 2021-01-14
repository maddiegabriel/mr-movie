import React, { useReducer } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQ":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "PASS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchTerm => {

    dispatch({
      type: "REQ"
    });

    fetch(`http://www.omdbapi.com/?apikey=2259721&s=${searchTerm}&type=movie`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
              type: "PASS",
              payload: jsonResponse.Search
          });
        } else {
          dispatch({
              type: "FAIL",
              error: jsonResponse.Error
          });
        }
      });
    };

    const useStyles = makeStyles(() => ({
      root: {
        backgroundColor: '#FCFCFC',
      },
      results: {
        width: '90%',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',  
      },
      divider: {
        height: '40vh',
      },
    }));

    const classes = useStyles();
    const { movies, errorMessage, loading } = state;

    return (
      <div className={classes.root}>
        <Header />
        <Search search={search} />
        <div className={classes.divider}></div>
        <div className={classes.results}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <SearchResults movies={movies} errorMessage={errorMessage} loading={loading} />
            </Grid>
            <Grid item xs={6}>
              <Nominations />
            </Grid>
          </Grid>
        </div>
      </div>
    );
};

export default App;