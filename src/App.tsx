// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';
import { Container, Card, Grid, Label, Image, Menu, Modal, Divider, Button, Form, TextArea } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

import { User, authSubscribe ,setDoc } from "@junobuild/core";
import { Auth } from "./components/Auth";
import Posts from './components/Posts';
import GoogleMapComponent from './components/GoogleMapComponent';
import Content from "./components/openchat/Content";
import OpenChatFrame from "./components/openchat/OpenChatFrame";
import HikingSchedule from './components/HikingSchedule';
import ImageList from './components/ImageList';

import Tong from './components/Tong';
import Inbox from './components/Inbox';

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

  const [activeMenu, setActiveMenu] = useState("posts");
  const [user, setUser] = useState<User | null>(null);
  // Add these states inside App component
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = authSubscribe((user: User | null) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  /*export default interface InboxMessage {
    id: string;
    type: 'feedback' | 'notification' | 'alert' | 'system' | 'group';
    title: string;
    content: string;
    status: 'unread' | 'read' | 'archived';
    priority: 'low' | 'medium' | 'high';
    metadata: {
      sender?: string;
      groupId?: string;
      trailId?: string;
      eventId?: string;
      timestamp: number;
    }
  }*/
  const saveMessage = async () => {
    const key = "amsun_" + uuidv4();
    setShowMessageForm(false);
    await setDoc({
      collection: "inbox",
      doc: {
        key: key,
        data: {
          id: key,
          title: "amsun",
          type: "social",
          message: message,
          status: "unread",
          priority: "low",
          created_at: new Date().getTime(),
          sender: "amsun",
        }


      }
    });
    setMessage('');
    
  };

  const [leftChat, setLeftChat] = useState<Chat>({
    path: "/community/z4by7-xyaaa-aaaar-aszzq-cai/channel/242488564411966582284831137099269973854",
    title: "Message",
  });






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
              Dream Big
              <Card.Content>
              </Card.Content>
              <Label>Blockchain</Label>
              <Label>Hiking</Label>
              <Label>Garden</Label>

            </Card.Content>

          </Card>

          <Menu vertical fluid>
            <Menu.Item active={activeMenu == "posts"} onClick={() => setActiveMenu("posts")}>
              Posts
            </Menu.Item>
            {user &&
              <Menu.Item
                active={activeMenu === "inbox"}
                onClick={() => setActiveMenu("inbox")}
              >
                Inbox
              </Menu.Item>}
            <Menu.Item>
              <a href="https://icevent.app/calendar/25" target='_blank'>Hiking Schedule</a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://alltracks.icevent.app/" target='_blank'>Hiking Track</a>
            </Menu.Item>
            
            <Menu.Item>
              <Button fluid onClick={() => setShowMessageForm(true)}>Leave a Message</Button>
            </Menu.Item>
          </Menu>
          <ImageList />


        </Grid.Column>

        <Grid.Column mobile={16} computer={11}>
          {activeMenu == "tong" ? (
            <Tong />
          ) : activeMenu === "inbox" ? (
            <Inbox />

          ) : (
            <Posts />
          )}
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

      <Modal
        size='tiny'
        open={showMessageForm}
        onClose={() => setShowMessageForm(false)}
      >
        <Modal.Header>Leave a Message</Modal.Header>
        <Modal.Content>
          <Form>
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Write your message here...'
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setShowMessageForm(false)}>Cancel</Button>
          <Button positive onClick={saveMessage}>Send</Button>
        </Modal.Actions>
      </Modal>
    </Container>

  )
}

export default App
