// @flow

import React from 'react';
import styled from 'styled-components';

import { mapLink } from 'lib/utilities';

const LineItem = styled.div`
  font-style: normal;
  margin-bottom: 0rem;
  padding: 0;
`;

const MapLink = styled.a`text-decoration: underline;`;

const Address = ({
  name,
  address,
  city,
  country,
  lat,
  lng,
  style,
}: {
  name: string,
  address: string,
  city: string,
  country: string,
  lat: number,
  lng: number,
  style?: Object,
}) => {
  const link = mapLink({ address, city, country, lat, lng });
  return (
    <address style={style}>
      <LineItem>
        <strong>{name}</strong>
      </LineItem>
      <LineItem>{address}</LineItem>
      <LineItem>
        {city}, {country}
      </LineItem>
      {link && <MapLink href={link}>View on map</MapLink>}
    </address>
  );
};

export default Address;
