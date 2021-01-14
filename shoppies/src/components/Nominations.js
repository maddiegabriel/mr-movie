import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import NomineeCard from "./NomineeCard";

const Nominations = (props) => {

  let noms = [];
  for (let i = 0; i < localStorage.length; i++) {
    noms.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  const useStyles = makeStyles(() => ({
    card: {
      padding: '10px 4px',
      boxShadow: '2px 4px 6px 4px #ccc',
    },
    title: {
      position: 'sticky',
    },
    nominations: {
      height: '45vh',
      overflow: 'scroll',
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.title} title="Your Shoppies Nominations" />
      <CardContent>
        <List className={classes.nominations}>
            {noms.map((movie, index) =>
              <ListItem key={index} className={classes.result}>
                <NomineeCard key={index} imdb={movie.imdb} title={movie.title} year={movie.year} poster={movie.poster} />
              </ListItem>
            )}
        </List>
      </CardContent>
    </Card>
  );
}

export default Nominations;