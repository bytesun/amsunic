import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface ImageCardProps {
  title: string;
  imageUrl: string;
  description: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl, description,onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
          onClick(event);
        }
      };
  return (
    <Card onClick={handleClick}>
      <Image src={imageUrl} wrapped ui={false} />
    </Card>
  );
};

export default ImageCard;
