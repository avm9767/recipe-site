import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFBB00'
        },
        secondary: {
            main: '#D10404',
        },
        // text: {
        //     primary: '#000000cf',
        // },
    },
    typography: {
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
        },
        h2: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
        },
        h3: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
        },
        h4: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
        },
        h5: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"DM Serif Display", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
        },
        subtitle1: {
            // fontStyle: 'italic',
        },
        subtitle2: {
            // fontStyle: 'italic',
        },
    },
});

export default theme;
