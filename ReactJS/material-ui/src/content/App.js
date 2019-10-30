import React from 'react';
import {Route, NavLink, BrowserRouter as Router} from "react-router-dom";

import {Button, CssBaseline, Link, AppBar, Toolbar, Typography} from '@material-ui/core';

import Home from './Home';

import useStyles from '../styles/Style';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; Copyright
        <Link color="inherit" href="https://localhost:3000/">
          Reac Material
        </Link>
        {new Date().getFullYear()}
      </Typography>
  );
}

export default function Album() {
  const classes = useStyles();

  return(
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Company Name
            </Typography>
            <nav>
              <NavLink to="/" exact className={classes.link}>Home</NavLink>
              <NavLink to="/blog" className={classes.link}>Blog</NavLink>
              <NavLink to="/gallery" className={classes.link}>Gallery</NavLink>
              <NavLink to="/contact" className={classes.link}>Contact</NavLink>
            </nav>
            <Button href="#" variant="contained">
              Login
            </Button>
          </Toolbar>
          </AppBar>

          <main>
            {/* Hero unit */}
            <Route exact path="/" component={Home}/>
          </main>

          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
            <Copyright/>
          </footer>
          {/* End footer */}

          </React.Fragment>
          </Router>
    );
}
