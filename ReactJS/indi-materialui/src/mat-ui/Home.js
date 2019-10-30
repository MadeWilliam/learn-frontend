import React, { Component } from "react";

// import useStyles from '../styles/Style';
// import '../styles/Style'

import {
    Typography,
    Container,
    Paper,
    Button,
    Grid,
    CssBaseline,
    Box
} from "@material-ui/core";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

import Slider from "react-slick";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                <div key={1}>
                    <img
                        src={require("../images/slide1.jpg")}
                        alt="banner"
                        style={{ borderRadius: 20, width: "100%", maxHeight: "400px" }}
                    />
                </div>,
                <div key={2}>
                    <img
                        src={require("../images/slide2.jpg")}
                        alt="banner"
                        style={{ borderRadius: 20, width: "100%", maxHeight: "400px" }}
                    />
                </div>,
                <div key={3}>
                    <img
                        src={require("../images/slide3.jpg")}
                        alt="banner"
                        style={{ borderRadius: 20, width: "100%", maxHeight: "400px" }}
                    />
                </div>,
                <div key={4}>
                    <img
                        src={require("../images/slide4.jpg")}
                        alt="banner"
                        style={{ borderRadius: 20, width: "100%", maxHeight: "400px" }}
                    />
                </div>
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
            autoplay: this.state.autoplay
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <React.Fragment>
                <CssBaseline />
                <Box
                    style={{
                        margin: "0 auto",
                        paddingTop: "80px",
                        height: "2000px"
                    }}
                >
                    <Box
                        component="div"
                        paddingTop="50px"
                        relative
                        variant="body1"
                        style={{
                            backgroundColor: "#BA241B",
                            maxHeight: "460px"
                        }}
                    >
                        <Container
                            bgcolor="grey.700"
                            style={{
                                maxHeight: "480px",
                                maxWidth: "1200px",
                                padding: 0,
                                backgroundColor: "blue"
                            }}
                        >
                            <img
                                width="100%"
                                height="100%"
                                src={require("../images/desktop.jpg")}
                                alt="desktop-image"
                                style={{ borderRadius: 20 }}
                            />
                        </Container>
                    </Box>
                    <Box
                        fixed
                        style={{
                            // backgroundColor: "orange",
                            minHeight: "120px"
                        }}
                    />

                    <Box
                        fixed
                        style={{
                            minHeight: "80px",
                            padding: 0
                        }}
                    >
                        <Box
                            style={{
                                borderRadius: 20,
                                margin: "auto",
                                fontSize: "17px",
                                verticalAlign: "center",
                                color: "white",
                                textAlign: "center",
                                maxWidth: "1200px",
                                minHeight: "66px",
                                background:
                                    "linear-gradient(135deg, #ea322a 30%, #ac2222 50%)"
                            }}
                        >
                            <Typography
                                Typography
                                variant="h1"
                                component="h2"
                                container
                                style={{
                                    fontSize: "17px",
                                    padding: "20px 0",
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                Berlangganan IndiHome bisa dapat internet cepat,
                                nelpon rumah sepuasnya dan nonton beragam konten
                                terbaik di layar TV interaktif
                            </Typography>
                        </Box>
                    </Box>

                    <div
                        style={{
                            flexGrow: 1,
                            margin:"auto"
                        }}
                    >
                        <Grid
                            container
                            spacing={3}
                            justify="center"
                            alignItems="flex-start"
                            style={{
                                flexGrow: 1,
                                justify:"space-evenly",
                                minHeight: "300px",
                                maxWidth: "1200px",
                                margin: "10px auto 0"
                            }}
                        >
                            <Grid
                                item
                                md={8}
                                xs={12}
                                style={{
                                    maxHeight: "400px"
                                }}
                            >
                                <OwlCarousel options={options}>
                                    {this.state.items}
                                </OwlCarousel>
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={12}
                                direction="column"
                                spacing={6}
                            >
                                <Grid item md={12} xs={12}>
                                    <img
                                        src={require("../images/catchplay-home.jpg")}
                                        alt="desktop-image"
                                        style={{ borderRadius: 20, width: "80%"}}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <img
                                        src={require("../images/edukids-home.jpg")}
                                        alt="desktop-image"
                                        style={{ borderRadius: 20, width: "80%"}}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <Box maxWidth="1200px" margin="auto">
                        <Typography variant="h5" component="h2">
                            Add-on Unggulan
                        </Typography>
                    </Box>

                    <Box
                        fixed
                        style={{
                            flexGrow: 1,
                            minHeight: "250px",
                            maxWidth: "1200px",
                            margin: "10px auto 0"
                        }}
                    >
                        <Grid
                            container
                            spacing={3}
                            justify="center"
                            alignItems="flex-start"
                        >
                            <Grid zeroMinWidth item md={3} xs={6}>
                                <img
                                    width="100%"
                                    height="100%"
                                    src={require("../images/hooq-home.jpg")}
                                    alt="desktop-image"
                                    style={{
                                        minHeight: "200px",
                                        borderRadius: 20
                                    }}
                                />
                            </Grid>
                            <Grid zeroMinWidth item md={3} xs={6}>
                                <img
                                    width="100%"
                                    height="100%"
                                    src={require("../images/iflix-home.jpg")}
                                    alt="desktop-image"
                                    style={{
                                        minHeight: "200px",
                                        borderRadius: 20
                                    }}
                                />
                            </Grid>
                            <Grid zeroMinWidth item md={3} xs={6}>
                                <img
                                    width="100%"
                                    height="100%"
                                    src={require("../images/edukids-home.jpg")}
                                    alt="desktop-image"
                                    style={{
                                        minHeight: "200px",
                                        borderRadius: 20
                                    }}
                                />
                            </Grid>
                            <Grid zeroMinWidth item md={3} xs={6}>
                                <img
                                    width="100%"
                                    height="100%"
                                    src={require("../images/catchplay-home.jpg")}
                                    alt="desktop-image"
                                    style={{
                                        minHeight: "200px",
                                        borderRadius: 20
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box
                        fixed
                        style={{
                            backgroundColor: "black",
                            height: "600px",
                            margin: "0 auto",
                            paddingTop: "20px"
                        }}
                    >
                        <Box
                            style={{
                                margin: "0 auto",
                                height: "100%",
                                width: "1200px"
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                container
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    padding: "20px 0",
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                Berlangganan IndiHome dan nikmati konten terbaik
                                di dalam layar TV Anda
                            </Typography>
                            <Box
                                style={{
                                    margin: "0 auto",
                                    width: "1200px",
                                    textAlign: "center"
                                }}
                            >
                                <Button>
                                    <img
                                        src={require("../images/useetv-active.png")}
                                        alt="desktop-image"
                                        style={{
                                            marginRight: "5px"
                                        }}
                                    />
                                </Button>
                                <Button>
                                    <img
                                        src={require("../images/hooq.png")}
                                        alt="desktop-image"
                                        style={{
                                            marginRight: "5px"
                                        }}
                                    />
                                </Button>
                                <Button>
                                    <img
                                        src={require("../images/catchplay.png")}
                                        alt="desktop-image"
                                        style={{
                                            marginRight: "5px"
                                        }}
                                    />
                                </Button>
                            </Box>
                            <Container fixed style={{ marginTop: 20 }}>
                                <Slider {...settings}>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-1.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-2.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-3.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-4.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-5.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-6.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-7.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-8.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-9.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-10.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-11.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "350px"
                                            }}
                                            src={require("../images/slider/utv-12.jpg")}
                                            alt="slider-image"
                                        />
                                        <Typography style={{color:"white"}} variant="h6">
                                            Title
                                        </Typography>
                                        <Typography style={{color:"white"}} variant="caption">
                                            Caption
                                        </Typography>
                                    </Grid>
                                </Slider>
                            </Container>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
        );
    }
}

export default Home;
