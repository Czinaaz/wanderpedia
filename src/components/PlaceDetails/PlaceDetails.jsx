import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';

import useStyles from './styles.js'

const PlaceDetails = ({ place, selected, refProp }) => {
if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
const classes = useStyles();

return (
    <Card elevation={6}>
    <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        title={place.name}
    />
    <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" value={Number(place.rating)} readOnly />
            <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
                {place.price_level}
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
                {place.ranking}
            </Typography>
        </Box>

        {/* Awards */}
        
        {place?.awards?.map((award) => (
        <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
        </Box>
        ))}

        {/* Cuisine */}

        {place?.cuisine?.map(({ name }) => (
        <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {/* Address */}

        {place.address && (
        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
        </Typography>
        )}

        {/* Phone */}

        
        {place.phone && (
        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
        </Typography>
        )}
    </CardContent>
    <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
        Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
        Website
        </Button>
    </CardActions>
    </Card>
);
};

export default PlaceDetails;