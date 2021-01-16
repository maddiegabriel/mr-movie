import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/Button';
import { NominationListContextConsumer } from "./NominationListContext";
import { BannerContextConsumer } from "./BannerContext";

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

  const buildNomination = (nCtx, bCtx, imdbID, title, year, poster) => {
    console.log('in buildNomination')

    if(nCtx.nominationList.length === 5) {
      bCtx.setBanners(false, true);
      return;
    } else if(nCtx.nominationList.length === 4) {
      bCtx.setBanners(true, false);
    }

    let newNomination = {
      imdb: imdbID,
      title: title,
      year: year,
      poster: poster
    };

    let nomsList = [];  
    if(nCtx.nominationList.length === 0) {
      nomsList.push(JSON.stringify(newNomination));
      nCtx.setNominationList(nomsList);
    } else {
      for(let i=0; i < nCtx.nominationList.length; i++) {
        nomsList.push(nCtx.nominationList[i]);
      }
      nomsList.push(JSON.stringify(newNomination));
      nCtx.setNominationList(nomsList);
    }
  }

  return (
    <NominationListContextConsumer>
      {nomContext => (
        <BannerContextConsumer>
          {bannerContext => (
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
                    size="large"
                    color="primary"
                    className={classes.button}
                    startIcon={<StarsIcon />}
                    onClick={() => buildNomination(nomContext, bannerContext, props.imdb, props.title, props.year, props.poster)}
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
          )}
        </BannerContextConsumer>
      )}
    </NominationListContextConsumer>
  );
}

export default MovieCard;
