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

const Map = () => {
  const classes = useStyles(); 
  const isMobile = useMediaQuery('(max-width: 600px)');
  

  const coordinates = { lat: 0, lng: 0 }; 

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAFNHjqjVWNOxN3SPF6YuVDivE_OeW-_Sc' }} 
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;