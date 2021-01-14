import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import NomineeCard from "./NomineeCard";

const Nominations = (props) => {
  console.log("nominations!")
  console.log(props)

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
          <ListItem className={classes.result}>
            {(
              Object.entries(props.nominations[0]).map(([key, value]) => {
                <ListItem className={classes.result}>
                  <NomineeCard title={value.Title} year={value.Year} poster={value.Poster} />
                </ListItem>
              })
            )}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Nominations;
