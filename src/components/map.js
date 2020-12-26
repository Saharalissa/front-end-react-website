// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import CurrentLocation from './map.js';
// const mapStyles = {
//   map: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%'
//   }
// };



// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     };
  
//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
  
//     onClose = props => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         });
//       }
//     };
  
//     render() {
//       return (
//         <CurrentLocation
//           centerAroundCurrentLocation
//           google={this.props.google}
//         >
//           <Marker onClick={this.onMarkerClick} name={'current location'} />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//             onClose={this.onClose}
//           >
//             <div>
//               <h4>{this.state.selectedPlace.name}</h4>
//             </div>
//           </InfoWindow>
//         </CurrentLocation>
//       );
//     }
//   }



// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDhdSw1QzkXBrYnLSt3EF3izfHEhUj6LMc'
// })(MapContainer);