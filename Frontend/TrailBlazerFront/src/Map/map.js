import React from 'react';

import '../index.css';

export default class Map extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.75, lng: -104.75},
      zoom: 10,
      mapTypeId: 'roadmap',
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='map' />
      </div>
    );
  }
};