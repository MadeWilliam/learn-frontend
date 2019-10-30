import React, { Component } from 'react';

// import useStyles from '../styles/Style';
// import '../styles/Style'

import {Typography, Container, Paper, Grid} from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

import Slider from "react-slick";

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: [
                <div key={1}><img src={require('../images/desktop.jpg')} alt="banner"/></div>,
                <div key={2}><img src={require('../images/desktop.jpg')} alt="banner"/></div>,
                <div key={3}><img src={require('../images/desktop.jpg')} alt="banner"/></div>
            ],
            itemNo: 1,
            loop: false,
            nav: false,
            rewind: true,
            autoplay: true
        };
    }

    render() {
        // const classes = useStyles();

        const options = {
            items: this.state.itemNo,
            loop: this.state.loop,
            nav: this.state.nav,
            rewind: this.state.rewind,
            autoplay: this.state.autoplay,
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return(
            <React.Fragment>

                <OwlCarousel options={options}>
                    {this.state.items}
                </OwlCarousel>

                <Container fixed>
                    <Typography component="h1" align="center" variant="h3" style={{marginTop:20, marginBottom:20}}>
                        Babastudio pernah diliput
                    </Typography>
                </Container>

                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/01.png')} alt="container-image"/>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/01.png')} alt="container-image"/>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/01.png')} alt="container-image"/>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/01.png')} alt="container-image"/>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                <Container fixed style={{marginTop:20}}>
                    <Typography component="h1" align="center" variant="h3" style={{marginBottom:20}}>
                        Karya Murid dan Instruktur Babastudio
                    </Typography>
                    <Slider {...settings}>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                        <Grid item xs={11} md={11}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src={require('../images/republika.jpg')} alt="slider-image"/>
                        </Grid>
                    </Slider>
                </Container>

                <Container fixed>
                    <Typography component="h1" align="center" variant="h3" style={{marginBottom:20}}>
                        Prestasi Alumni Babastudio
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography component="p">
                                Semenjak tahun 2014 pada acara e-transparancy award. Babastudio ditunjuk sebagai konsultan untuk memberikan masukan atas website-website milik kementerian dan lembaga RI. Beberapa website kementerian telah dibangun dengan mengikuti tahapan-tahapan pembuatan website yang sesuai dengan standarisasi website yang baik, serta peraturan. Contohnya adalah website milik kementerian kelautan, kementerian agrarian dan beberapa kementerian lain telah dibuat oleh babastudio. Sampai saat inipun babastudio masih rutin memberikan masukan dan pelatihan pada beberapa kementerian mengenai teknologi terbaru dalam bidang website, pemanfaatan social media dan mobile app.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img /* className={classes.image} */ style={{width: "100%"}}src='https://www.babastudio.com/assets/front_page/img/content/why/ss-min.png' alt="Babastudio-image"/>
                        </Grid>
                    </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default Home;
