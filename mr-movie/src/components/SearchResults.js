import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import MovieCard from "./MovieCard";
import Typography from '@material-ui/core/Typography';

const SearchResults = (props) => {

  const useStyles = makeStyles(() => ({
    card: {
      padding: '10px 4px',
      boxShadow: '2px 4px 6px 4px #ccc',
      marginBottom: '6%',
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
    errorText: {
      textAlign: 'center',
      marginTop: '20%',
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.title} title="Movie Search Results" />
      <CardContent>
        <List className={classes.results}>
          { // Conditional rendering based on if movie results exist
                (props.movies === null)
                  ? <div>
                      <div className={classes.errorText}>
                        <Typography component="h5" variant="h5">Hmmm... no results!</Typography>
                        <Typography variant="subtitle1" color="textSecondary">Try a more specific search.</Typography>
                      </div>
                    </div>
                  : props.movies.map((movie, index) => (
                      <ListItem key={index} className={classes.result}>
                        <MovieCard key={index} imdb={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
                      </ListItem>
                    ))
              }
        </List>
      </CardContent>
    </Card>
  );
}

export default SearchResults;
