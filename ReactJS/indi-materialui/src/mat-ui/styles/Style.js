import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: "#EC3339",
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: 'white',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: "underline"
        }
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    image: {
        width: "100%",
    },
    button: {
        backgroundColor: "#D52E34",
        color: "white",
    },
    navitem: {
        right: 0,
    }
}))

export default useStyles;