import React, { useReducer, useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
        movies: action.payload
      };
    case "FAIL":
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage } = state;
  // if(!localStorage.getItem("shoppies_nominees")) {
  //   localStorage.setItem("shoppies_nominees", "{}")
  // }
  // const [nominees, setNominees] = useState(JSON.parse(localStorage.getItem("shoppies_nominees")));
  // const { nominationList } = useContext(NominationListContext)

  // const [nominationList, setNominationList] = useState([]);
  // function updateList(newMovie) {
  //   console.log('updateList')
  //   console.log(newMovie)
  //   let list = nominationList;
  //   list.push(newMovie)
  //   setNominationList(list)
  // }

  // update nominees state value when localStorage.nominees changes
  // useEffect(() => {
  //   window.addEventListener('storage', () => {
  //     console.log("CHANGE DETECTED")
  //     setNominees(JSON.parse(localStorage.shoppies_nominees)) 
  //   });
  // }, [])

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

  return (
    <div className={classes.root}>
      <Header />
      <Search search={search} />
      <div className={classes.divider}></div>
      <div className={classes.results}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <SearchResults movies={movies} errorMessage={errorMessage} />
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