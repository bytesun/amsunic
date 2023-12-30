import React,{useEffect, useState} from 'react';
import { Grid } from 'semantic-ui-react';

import { listAssets } from "@junobuild/core";
import ImageCard from './ImageCard';

interface ImageData {
  name: string;
  downloadUrl: string;
  description: string|undefined;
}

interface ImageListProps {
  images: ImageData[];
}

const ImageList: React.FC<ImageListProps> = () => {

  const [images, setImages] = useState<ImageData[]>([])

  useEffect(()=>{
    loadImages();
  },[]);

  async function loadImages(){
    const myList = await listAssets({
      collection: "photos",
    });

    let loadImages:ImageData[] = []

    myList.assets.map(as => loadImages.push({
      name: as.name,
      downloadUrl: as.downloadUrl,
      description: as.description
    }))
    setImages(loadImages);
  }
  return (
    <Grid columns={3}>
      {images.map((image, index) => (
        <Grid.Column key={index}>
          <ImageCard
            title={""}
            imageUrl={image.downloadUrl}
            description={image.description ? image.description : ""}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ImageList;
