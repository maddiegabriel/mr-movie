import React, { useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import { BannerContextConsumer } from "./BannerContext";

const initialState = {
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQ":
      return {
        ...state,
        errorMessage: null
      };
    case "PASS":
      return {
        ...state,
        movies: action.payload,
        errorMessage: null
      };
    case "FAIL":
      return {
        ...state,
        movies: null,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage } = state;

  const search = searchTerm => {
    dispatch({
      type: "REQ"
    });

    fetch(`https://www.omdbapi.com/?apikey=2259721&s=${searchTerm}&type=movie`)
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

  return (
    <BannerContextConsumer>
      {context => (
        <div className={classes.root}>
          <Header />
          <Search search={search} />
          {context.banners[0]
            ? <Alert severity="success">All done - you have favourited 5 movies!</Alert>
            : null
          }
          {context.banners[1]
            ? <Alert severity="error">Hey - you already favourited 5 movies! Remove a nomination to keep going.</Alert>
            : null
          }
          <div className={classes.divider}></div>
          <div className={classes.results}>
            <Grid container spacing={3}>
              <Grid item xs={6} >
                <SearchResults movies={movies} errorMessage={errorMessage} />
              </Grid>
              <Grid item xs={6}>
                <Nominations />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </BannerContextConsumer>
  );
};

export default App;