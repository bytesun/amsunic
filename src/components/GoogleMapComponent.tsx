import React, { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMapComponent: React.FC = () => {
  const googleMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "",
      version: 'weekly',
    });

    loader.load().then(() => {
      const newMap = new google.maps.Map(googleMapRef.current as HTMLDivElement, {
        center: { lat: 49.37, lng: -122.506 },
        zoom: 8,
      });

      setMap(newMap);

      // Add markers to the map
      const marker1 = new google.maps.Marker({
        position: { lat: 49.2827, lng: -123.1207 },
        map: newMap,
        title: 'Vancouver',
      });

      const marker2 = new google.maps.Marker({
        position: { lat: 51.3353, lng: -117.5298 },
        map: newMap,
        title: 'Glacier National Park',
      });
    });
  }, []);

  return <div ref={googleMapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMapComponent;