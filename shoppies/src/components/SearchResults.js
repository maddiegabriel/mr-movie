import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import MovieCard from "./MovieCard";

const SearchResults = (props) => {

  const useStyles = makeStyles(() => ({
    card: {
      padding: '10px 4px',
      boxShadow: '2px 4px 6px 4px #ccc',
    },
    title: {
      position: 'sticky',
    },
    results: {
      height: '45vh',
      overflow: 'scroll',
      paddingLeft: '0',
    },
    result: {
      paddingLeft: '2px',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.title} title="Movie Search Results" />
      <CardContent>
        <List className={classes.results}>
          {(
            props.movies.map((movie, index) => (
              <ListItem className={classes.result}>
                <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </ListItem>
            ))
          )}
        </List>
      </CardContent>
    </Card>
  );
}

export default SearchResults;
