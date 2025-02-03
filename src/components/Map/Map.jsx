// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { Rating } from '@mui/lab';

// import useStyles from './styles.js';

// const Map = ( {setCoordinates, setBounds, coordinates, places}) => {
//   

//   
// const Map = () => {
//   const classes = useStyles;

//   const isMobile = useMediaQuery('(max-width: 600px)');

//   const coordinates = { lat: 0, lng: 0 }
//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key:'AIzaSyBEwc4wyXBKKQ8lqwbgzQfF52MUnzT9G0w'}}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={''}
//         onChange={''}

//         onChildClick={''}
//       >

//       </GoogleMapReact>
//     </div>
    // <div className={classes.mapContainer}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key:'AIzaSyAFNHjqjVWNOxN3SPF6YuVDivE_OeW-_Sc'}}
    //     defaultCenter={coordinates}
    //     center={coordinates}
    //     defaultZoom={14}
    //     margin={[50, 50, 50, 50]}
    //     options={''}
    //     onChange={(e) => {
    //       setCoordinates({ lat: e.center.lat, lng: e.center.lng});
    //       setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
    //     }}

    //     onChildClick={''}
    //   >
      
    //     {places?.map((place) => (
    //       <div 
    //       key={place.id} 
    //       lat={place.geometry.location.lat()} 
    //       lng={place.geometry.location} 
    //       className={classes.mapContainer}
    //       />
    //     ))}
    //   </GoogleMapReact>
    // </div>
//   )
// }

// export default Map;


import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/lab';

import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coordinates, places  }) => {
  const classes = useStyles(); 
  const isDesktop = useMediaQuery('(max-width: 600px)');
  



  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAFNHjqjVWNOxN3SPF6YuVDivE_OeW-_Sc' }} 
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng});
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >
        {places?.map((place, i )=> (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isDesktop? (
              <LocationOnOutlinedIcon color='primary' fontSize='large' />
            ) : (
              <Paper elevation={3} className={classes.paper} >
                <Typography className={classes.typography} variant='subtitle2' gutterBottom >
                  {place.name}
                </Typography>
                <img 
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
              </Paper>
            )
          } 
          </div>
        ))}
        {/* {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom  >
                    {place.name}
                  </Typography>
                  <img 
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )
            }
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;