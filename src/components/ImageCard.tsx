import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface ImageCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl, description }) => {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
    </Card>
  );
};

export default ImageCard;
