import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/Button';

const MovieCard = (props) => {

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      width: '100%',
      boxShadow: '2px 4px 6px 4px #ccc',
    },
    details: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '30vh',
    },
    content: {
      flex: '1 0 auto',
    },
    image: {
      width: '30%',
    },
    button: {
      marginTop: '30px',
      backgroundColor: '#96BF48',
      '&:hover': {
        backgroundColor: '#5E8E3E',
      }
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.year}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<StarsIcon />}
          >
            Nominate
          </Button>
        </CardContent>
      </div>
      <CardMedia
        className={classes.image}
        image={props.poster}
        title="Movie poster"
      />
    </Card>
  );
}

export default MovieCard;
