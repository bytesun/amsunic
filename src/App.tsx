// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';
import { Container, Card, Grid, Label, Icon, Menu, Modal } from 'semantic-ui-react';

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
        <Menu.Item header>Sun</Menu.Item>
        <Menu.Item position='right'><Auth /></Menu.Item>
      </Menu>
      <Grid columns={2}>
        <Grid.Column mobile={16} computer={5}>
          <Card fluid>
            <Card.Content>
              My interests
            </Card.Content>
            <Card.Content>

              <Label>Hiking</Label>
              <Label>Garden</Label>
              <Label>Blockchain</Label>
              <Label>ICP</Label>
            </Card.Content>

          </Card>

          <Menu vertical fluid>

            <Menu.Item onClick={() => setOpenHiking(true)}><Icon name="calendar" color='blue' />Hiking Schedule</Menu.Item>
            <Menu.Item onClick={() => setOpenChat(true)}><Icon name="chat" color='blue' />OpenChat</Menu.Item>

          </Menu>
        </Grid.Column>
        <Grid.Column mobile={16} computer={11}>

          {showImages && <ImageList/>}

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
