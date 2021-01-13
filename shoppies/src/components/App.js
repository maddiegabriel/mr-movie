import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const OMDB_API_URL = "https://www.omdbapi.com/?s=alice&apikey=2259721";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
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
  let term;

  useEffect(() => {
      fetch(OMDB_API_URL)
          .then(response => response.json())
          .then(jsonResponse => {
      
          dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchTerm => {
    term = searchTerm;
  
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=2259721`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.Search
          });
        } else {
          dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.Error
          });
        }
      });
    };
    
    const useStyles = makeStyles(() => ({
      root: {
        backgroundColor: '#fcfcfc',
      },
      results: {
        flexGrow: 1,
      }
    }));
  
    const classes = useStyles();
    const { movies, errorMessage, loading } = state;
    
    return (
      <div className={classes.root}>
        <Header />
        <Search search={search} />
        <div className={classes.results}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <SearchResults term={term} movies={movies} errorMessage={errorMessage} loading={loading} />
            </Grid>
            <Grid item xs={4}>
              <SearchResults term={term} movies={movies} errorMessage={errorMessage} loading={loading} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
};

export default App;