import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Nominations = (props) => {
  console.log(props)
  const useStyles = makeStyles((theme) => ({
    card: {
      marginTop: '10%',
      padding: '10px 4px',
      boxShadow: '2px 4px 6px 4px #ccc',
    },
    nominations: {
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h5" variant="h5">
            Your Shoppies Nominations
        </Typography>
        <List className={classes.nominations}>
          <ListItem>
            <ListItemText primary="You haven't nominated any movies yet... get to work!" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Nominations;
