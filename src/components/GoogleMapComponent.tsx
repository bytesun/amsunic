import React, { useRef, useEffect } from 'react';
import { kml } from "@tmcw/togeojson";
import { Loader } from '@googlemaps/js-api-loader';
import { listAssets } from "@junobuild/core";

const GoogleMapComponent: React.FC = () => {
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
    });

    loader.load().then(() => {
      new google.maps.Map(googleMapRef.current as HTMLDivElement, {
        center: { lat: 49.37, lng: -122.506 },
        zoom: 8,
      });
    });

    loadGPS();
  }, []);

  async function loadGPS(){
    let gpses = await listAssets({
      collection:"gps"
    });
    console.log(gpses);
    let kmlfile = await fetch(gpses.assets[0].downloadUrl);
    console.log(kmlfile.body);
    // let jsondata = kml(kmlfile);

  }

  async function readStream(url: string) {
    // Start fetching the resource
    const response = await fetch(url);

    // Ensure the response is valid
    if (!response.body) {
        throw new Error('The response does not contain a readable body.');
    }

    // Get the ReadableStream from the response body
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let done, value;
    while (!done) {
        // Read from the stream
        ({ done, value } = await reader.read());
        if (!done) {
            // Process the chunk of data
            const chunk = decoder.decode(value, { stream: true });
            console.log(chunk); // Do something with the chunk
        }
    }
    console.log('Stream complete');
}

  return <div ref={googleMapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMapComponent;
