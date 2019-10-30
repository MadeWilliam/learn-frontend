import {makeStyles} from '@material-ui/core';

const useStylesFooter = makeStyles(theme => ({
    footerhead: {
        borderTop: "1px solid grey",
        width: "100%",
        marginTop: "100px",
    },

    footerwrapper: {
        width: "1200px",
        margin: "auto",
    },

    footerrow: {
        height: "100px",
        marginBottom: "20px",
        borderBottom: "1px solid grey",
    },

    socmedwrapper: {
        width: "600px",
        float: "left",
    },

    emailform: {
        width: "600px",
        float: "right",
    },

    li: {
        textAlign: "center",
        float: "left",
        marginRight: "10px",
        lineHeight: 0,
        listStyleType: "none",
    },

    p: {
        opacity: 0.5,
    },

    emailform:{
        textAlign: "right",
        lineHeight: "80px",
        listStyleType: "none",
    },

    input: {
        marginLeft: "10px",
    },

    footerNavLink: {
        width: "100%",
        height: "450px",
        display: "flex",
        justifyContent: 'space-between',
    },

    NavLinkitem: {
        height: "100%",
        minWidth: "200px",
    },

    NavLinkimg: {
        width: "100%",
        height: "70%",
    },

    a: {
        color: "black",
        opacity: 0.5,
    }

}))

export default useStylesFooter;