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
  nominations: [{
    "tt1131729": {
      "Year": 2009,
      "Title": "first one",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjYzMTMyM15BMl5BanBnXkFtZTcwOTk5NDA5Mg@@._V1_SX300.jpg"
    },
    "tt2608732": {
      "Year": 2013,
      "Title": "second one",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjYzMTMyM15BMl5BanBnXkFtZTcwOTk5NDA5Mg@@._V1_SX300.jpg"
    }
  }],
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

    fetch(`http://www.omdbapi.com/?apikey=2259721&s=${searchTerm}&type=movie`)
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
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',  
      },
      divider: {
        height: '40vh',
      },
    }));

    const classes = useStyles();
    const { movies, errorMessage, loading, nominations } = state;
    console.log("MOVIES RESULT!!!")
    console.log(movies);

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
              <Nominations nominations={nominations} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
};

export default App;