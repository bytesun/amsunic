import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMapComponent: React.FC = () => {
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBlWjbTNTDIZJ-FrLpRPr13uZ5gA0Mfmvg',
      version: 'weekly',
    });

    loader.load().then(() => {
      new google.maps.Map(googleMapRef.current as HTMLDivElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return <div ref={googleMapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMapComponent;
