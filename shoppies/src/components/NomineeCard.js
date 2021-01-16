import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import { NominationListContextConsumer } from "./NominationListContext";
import { BannerContextConsumer } from "./BannerContext";

const NomineeCard = (props) => {

  const removeNomination = (nCtx, bCtx, idToRemove) => {
    let newList = [];
    for(let i=0; i < nCtx.nominationList.length; i++) {
      if(JSON.parse(nCtx.nominationList[i]).imdb != idToRemove) {
        newList.push(nCtx.nominationList[i]);
      }
    }
    nCtx.setNominationList(newList);
    bCtx.setBanners(false, false);
  }

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
      backgroundColor: '#D71C21',
      '&:hover': {
        backgroundColor: '#880C15',
      }
    },
  }));

  const classes = useStyles();

  return (
    <NominationListContextConsumer>
      {context => (
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
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<DeleteOutlineIcon />}
                    onClick={() => removeNomination(context, bannerContext, props.imdb)}
                  >
                    REMOVE
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

export default NomineeCard;