import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import {
  Button,
  CssBaseline,
  Link,
  AppBar,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";

import Home from "./Home";

import useStyles from "./styles/Style";
import useStylesFooter from "./styles/StyleFooter";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy; Copyright
      <Link color="inherit" href="https://localhost:3000/">
        React Material
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Album() {
  const classes = useStyles();
  const footer = useStylesFooter();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="primary"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Grid md={6}>
              <Link to="/">
                <img src={require("../images/logo.png")} alt="" />
              </Link>
            </Grid>
            <Grid container justify="flex-end" md={6}>
              <nav className={classes.navitem}>
                <NavLink to="/" exact className={classes.link}>
                  Home
                </NavLink>
                <NavLink to="/article" className={classes.link}>
                  Article
                </NavLink>
                <NavLink to="/gallery" className={classes.link}>
                  Gallery
                </NavLink>
                <NavLink to="/contact" className={classes.link}>
                  Contact
                </NavLink>
                <Button className={classes.button} href="#" variant="contained">
                  Login
                </Button>
              </nav>
            </Grid>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login}/> */}
          {/* <Route path="/article" component={Article}/> */}
          {/* <Route path="/contact" component={Contact}/> */}
          {/* <Route path="/register" component={Register}/> */}
          {/* <Route path="/news" component={News}/> */}
        </main>

        {/* Footer */}
        <div className={footer.footerhead}>
          <div className={footer.footerwrapper}>
            <div className={footer.footerrow}>
              <div className={footer.socmedwrapper}>
                <ul>
                  <li className={footer.li}>
                    <img src={require("../images/facebook-logo.png")} alt="" />
                    <NavLink to="/"></NavLink>
                    <p className={footer.p}>facebook</p>
                  </li>
                  <li className={footer.li}>
                    <img src={require("../images/twitter-logo.png")} alt="" />
                    <NavLink to="/"></NavLink>
                    <p className={footer.p}>twitter</p>
                  </li>
                  <li className={footer.li}>
                    <img src={require("../images/instagram-logo.png")} alt="" />
                    <NavLink to="/"></NavLink>
                    <p className={footer.p}>instagram</p>
                  </li>
                  <li className={footer.li}>
                    <img src={require("../images/phone-logo.png")} alt="" />
                    <NavLink to="/"></NavLink>
                    <p className={footer.p}>call center 147</p>
                  </li>
                </ul>
              </div>
              <div className={footer.emailform}>
                <form action="">
                  <label for="email">Berlangganan newsletter sekarang</label>
                  <input id="email" type="email" placeholder="Email Anda" />
                  <input type="submit" value="SEND" />
                </form>
              </div>
            </div>
            <div className={footer.footerNavLink}>
              <div className={footer.NavLinkitem}>
                <img
                  className={footer.NavLinkimg}
                  src={require("../images/IndiHomeTokped-(Web)Home-Page-8468x400-(2)_D.jpg")}
                  alt=""
                />
              </div>
              <div className={footer.NavLinkitem}>
                <ul>
                  <li>Kenali IndiHome</li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Apa itu IndiHome?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Aplikasi myIndiHome
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Triple Play
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Dual Play
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Single Play
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Add-on
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className={footer.NavLinkitem}>
                <ul>
                  <li>IndiHome</li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Syarat & Ketentuan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Announcements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={footer.a} to="/">
                      Tutorials
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className={footer.Navlinkitem}>
                <ul>
                  <li>
                    <img src={require("../images/bitmap.png")} alt="" />
                  </li>
                  <li>
                    Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All
                    Right Reserved.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End footer */}
      </React.Fragment>
    </Router>
  );
}
