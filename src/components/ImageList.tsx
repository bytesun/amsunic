import React,{useEffect, useState} from 'react';
import { Grid, Image, Modal } from 'semantic-ui-react';

import { listAssets,authSubscribe,User } from "@junobuild/core";
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
  const [user, setUser] = useState<User|null>();

  const [images, setImages] = useState<ImageData[]>([])
  const [showImageModal, setShowImageModal] = useState(false);
  const [theImage, setTheImage] = useState<ImageData>()

  useEffect(() => {

    const sub = authSubscribe((user) => {
      console.log("user:", user)
      setUser(user);

    });
    loadImages();
    return () => sub();
  }, [user]);

  async function loadImages(){
    const myList = await listAssets({
      collection: "photos",
      filter: {
        order: {
          desc: true,
          field: "created_at",
        },
      },
    });

    let loadImages:ImageData[] = []
    console.log("images:", myList.assets);
    myList.assets.map(as => loadImages.push({
      name: as.name,
      downloadUrl: as.downloadUrl,
      description: as.description
    }))
    setImages(loadImages);
  }

  function clickImage(image:ImageData){
    setTheImage(image)
    setShowImageModal(true)
  };

  return (
    <Grid columns={3}>
      {images.map((image, index) => (
        <Grid.Column key={index}>
          <ImageCard
            title={""}
            imageUrl={image.downloadUrl}
            description={image.description ? image.description : ""}
            onClick={()=>clickImage(image)}
          />
        </Grid.Column>
      ))}

      <Modal
        onClose={() => setShowImageModal(false)}
        onOpen={() => setShowImageModal(true)}
        open={showImageModal}
        size='fullscreen'
      >
        <Image src={theImage?.downloadUrl}/>
      </Modal>
    </Grid>
  );
};

export default ImageList;
