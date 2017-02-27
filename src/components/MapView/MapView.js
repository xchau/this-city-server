import React, { Component } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import Nav from '../Nav/Nav';
import Control from './ControlPanel/Control';
import retro from './style';

const Map = withGoogleMap(props => {
  return <div>
    <GoogleMap
      onClick={props.onMapClick}
      ref={props.onMapMounted}
      center={props.center}
      zoom={props.zoom}
      defaultOptions={{
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: props.styles,
        zoomControl: false
      }}
    >
    </GoogleMap>
  </div>
});

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    }

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleMapClick(event) {
    //
  }

  render() {
    return <div>
      <Nav />
      <Map
        containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapMounted={this.handleMapMounted}
        onMapClick={this.handleMapClick}
        center={{lat: 47.616757, lng: -122.338063}}
        zoom={10}
        styles={retro}
      />
      <Control />
    </div>
  }
}

module.exports = MapView;