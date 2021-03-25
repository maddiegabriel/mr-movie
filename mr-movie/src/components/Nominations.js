import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { NominationListContextConsumer } from "./NominationListContext";
import NomineeCard from "./NomineeCard";
import SadOscar from "./sad.png";
import Typography from '@material-ui/core/Typography';

const Nominations = (props) => {

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
    },
    sadOscar: {
      width: '32%',
      minWidth: '20vh',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '8%',
    },
    sadOscarText: {
      textAlign: 'center',
    }
  }));

  const classes = useStyles();

  let nomsList = [];
  const formatList = (ctxNoms) => {
    nomsList = [];
    for(let i=0; i < ctxNoms.length; i++) {
      nomsList.push(JSON.parse(ctxNoms[i]));
    }
  }

  return (
    <NominationListContextConsumer>
      {context => (
        <Card className={classes.card}>
          {formatList(context.nominationList)}
          <CardHeader className={classes.title} title="Your Favourite Movies" />
          <CardContent>
          <List className={classes.nominations}>
              { // Conditional rendering based on if nominations exist
                (context.nominationList.length === 0)
                  ? <div>
                      <img src={SadOscar} alt="sad oscar" className={classes.sadOscar} />
                      <div className={classes.sadOscarText}>
                        <Typography component="h5" variant="h5">No nominations yet!</Typography>
                        <Typography variant="subtitle1" color="textSecondary">Use the search bar to get started.</Typography>
                      </div>
                    </div>
                  : nomsList.map((movie, index) => (
                      <ListItem key={index} className={classes.result}>
                        <NomineeCard key={index} imdb={movie.imdb} title={movie.title} year={movie.year} poster={movie.poster} />
                      </ListItem>
                    ))
              }
            </List>
          </CardContent>
        </Card>
      )}
    </NominationListContextConsumer>
  );
}

export default Nominations;