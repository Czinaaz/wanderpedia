import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import useStyles from './styles.js'

const List = ({places, childClicked, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState("Restaurants");
    const [rating, setRating] = useState("Restaurants");

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i)=> elRefs[i] || createRef());

        setElRefs(refs);
    },[places]);

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels & Attractions arround you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel >Type</InputLabel>
                <Select value={type} onChange={(e) => {
                    setType(e.target.value);
                }}>
                    <MenuItem value="Restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Rating</InputLabel>
                <Select value={rating} onChange={(e) => {
                    setRating(e.target.value);
                }}>
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => {
                    return (
                        <Grid  item key={i} xs={12}>
                            <PlaceDetails 
                                place={place} 
                                className={classes.card}
                                selected={Number(childClicked) === i}
                                refProp={elRefs[i]}
                            />
                        </Grid>
                    )
                } )}     
            </Grid>
        </div>
    )
}

export default List;





