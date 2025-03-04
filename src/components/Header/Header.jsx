import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { MapTwoTone } from '@mui/icons-material';
import useStyles from './styles.js';

const Header = () => {
    const classes = useStyles();

    
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.logo} >
                    <MapTwoTone className={classes.mapIcon}/>
                    Wanderpedia
                </Typography>
                <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='search...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;