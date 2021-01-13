import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Image from '../header.png';
import "../App.css";

const Header = () => {

  const useStyles = makeStyles(() => ({
    head: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '50vh',
      width: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <header className={classes.head}></header>
  );
};

export default Header;