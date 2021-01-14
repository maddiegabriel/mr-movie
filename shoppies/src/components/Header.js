import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Logo from "./logo.png";
import "../App.css";

const Header = () => {

  const useStyles = makeStyles(() => ({
    head: {
      minHeight: '46vh',
      width: '100%',
      backgroundColor: '#DFF3F7',
    },
    logo: {
      maxWidth: '65vh',
      top: '18vh',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)', 
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.head}>
      <img src={Logo} alt="website logo" className={classes.logo} />
    </div>
  );
};

export default Header;