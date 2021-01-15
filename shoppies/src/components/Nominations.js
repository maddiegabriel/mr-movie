import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { NominationListContextConsumer } from "./NominationListContext";

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
    }
  }));

  const classes = useStyles();

  return (
    <NominationListContextConsumer>
      {context => (
        <Card className={classes.card}>
          <CardHeader className={classes.title} title="Your Shoppies Nominations" />
          <CardContent>
            <List className={classes.nominations}>
                {/* {context.nominationList.map((movie, index) =>
                  <ListItem key={index} className={classes.result}>
                    <NomineeCard key={index} imdb={movie.imdb} title={movie.title} year={movie.year} poster={movie.poster} nominees={props.nominees} onNomineesChange={props.setNominees} />
                  </ListItem>
                )} */}
                <div>{context.nominationList}</div>
            </List>
          </CardContent>
        </Card>
        )}
    </NominationListContextConsumer>
  );
}

export default Nominations;