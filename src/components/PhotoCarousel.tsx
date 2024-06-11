// src/components/PhotoCarousel.tsx
import React, { useState } from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>

      <Image src={images[currentIndex]} size="large" />
      <Button icon onClick={prevImage}>
        <Icon name="chevron left" />
      </Button>
      <Button icon onClick={nextImage}>
        <Icon name="chevron right" />
      </Button>

    </div>
  );
};

export default PhotoCarousel;
