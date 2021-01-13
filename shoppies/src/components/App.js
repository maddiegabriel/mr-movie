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
  nominations: [],
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

  const search = searchTerm => {
  
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
        width: '90%',
        top: '65vh',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',  
      }
    }));
  
    const classes = useStyles();
    const { movies, errorMessage, loading, nominations } = state;
    
    return (
      <div className={classes.root}>
        <Header />
        <Search search={search} />
        <div className={classes.results}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <SearchResults movies={movies} errorMessage={errorMessage} loading={loading} />
            </Grid>
            <Grid item xs={6}>
              <Nominations nominations={nominations} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
};

export default App;