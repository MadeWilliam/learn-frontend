import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
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
}))

export default useStyles;