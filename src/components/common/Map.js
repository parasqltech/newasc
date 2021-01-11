import React, { Component  } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      lat : props.lat,
      lng : props.lng,
    }
}
  render() {
    
    return (
      <>
        {/* {this.state.lng} */}
        <Map google={this.props.google}
         initialCenter={{
          lat:this.state.lat ,
          lng:this.state.lng
        }}
        zoom={14}>
    
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
    </Map>
    </>
    );
  }
}
  
export default GoogleApiWrapper({
})(MapContainer)