// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';
import { Container, Card, Grid, Label, Image, Menu, Modal, Divider } from 'semantic-ui-react';

import { initJuno } from "@junobuild/core";
import { Auth } from "./components/Auth";
import Posts from './components/Posts';
import GoogleMapComponent from './components/GoogleMapComponent';
import Content from "./components/openchat/Content";
import OpenChatFrame from "./components/openchat/OpenChatFrame";
import HikingSchedule from './components/HikingSchedule';
import ImageList from './components/ImageList';

type Status = {

  status: String,

};
type Chat = {
  path: string;
  title: string;
};
function App() {

  const [showImages, setShowImages] = useState(true);
  const [openHiking, setOpenHiking] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const [leftChat, setLeftChat] = useState<Chat>({
    path: "/community/z4by7-xyaaa-aaaar-aszzq-cai/channel/242488564411966582284831137099269973854",
    title: "Message",
  });


  useEffect(() => {

    (async () =>
      await initJuno({
        satelliteId: "ruc7a-fiaaa-aaaal-ab4ha-cai",
      }))();

  }, []);



  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item header>
          <Image
            src='logo.png'
            size='mini'
            style={{ marginRight: '1.5em' }}
          />
          Sun
        </Menu.Item>
        <Menu.Item position='right'><Auth /></Menu.Item>
      </Menu>
      <Grid columns={2}>
        <Grid.Column mobile={16} computer={5}>
          <Card fluid>
            <Card.Content>
              Be the change you want to see in the world.
              <Label>Blockchain</Label>
              <Label>Hiking</Label>
              <Label>Garden</Label>
            </Card.Content>

          </Card>

          <Menu vertical fluid>
            <Menu.Item>
              <a href="https://icevent.app/calendar/25" target='_blank'>Hiking Schedule</a>
            </Menu.Item>

          </Menu>
          <ImageList />
        </Grid.Column>

        <Grid.Column mobile={16} computer={11}>
          <Posts />
        </Grid.Column>
      </Grid>


      <Modal

        onClose={() => setOpenHiking(false)}
        onOpen={() => setOpenHiking(true)}
        open={openHiking}
        size='fullscreen'
      >

        <Modal.Content>
          <HikingSchedule />
          <a href="https://icevent.app" target='_blank'>ICEvent</a>
        </Modal.Content>

      </Modal>


      <Modal

        onClose={() => setOpenChat(false)}
        onOpen={() => setOpenChat(true)}
        open={openChat}
        size='large'
      >
        <Modal.Content>
          <OpenChatFrame {...leftChat} />
        </Modal.Content>

      </Modal>

    </Container>

  )
}

export default App
