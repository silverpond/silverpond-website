// @flow
/* global google */
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { settings as mastHeadSettings } from 'components/MastHead';
import Header from 'components/Header';

import GoogleMap from 'google-map-react';

const Container = styled.div`height: ${mastHeadSettings.height};`;

const createMarker = (map, lat, lon) => {
  // $FlowFixMe
  return new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map,
  });
};

const mapStyles = [
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { saturation: -100 }, { lightness: 20 }],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { saturation: -100 }, { lightness: 40 }],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { saturation: -10 }, { lightness: 30 }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }, { saturation: -60 }, { lightness: 10 }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }, { saturation: -60 }, { lightness: 60 }],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }, { saturation: -100 }, { lightness: 60 }],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }, { saturation: -100 }, { lightness: 60 }],
  },
];

const MastHeadMap = ({ lat, lng }: { lat: number, lng: number }) => {
  return (
    <Container>
      <Header
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        onDark
      />
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyDB7DpjzTPnafr-hf5Yf-eRO6jlz-hixtI',
        }}
        zoom={17}
        defaultCenter={{
          lat,
          lng,
        }}
        scrollwheel={false}
        onGoogleApiLoaded={({ map }) => {
          createMarker(map, lat, lng);
        }}
        yesIWantToUseGoogleMapApiInternals
        options={{
          scrollwheel: false,
          styles: mapStyles,
        }}
      />
    </Container>
  );
};

export default MastHeadMap;
