// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';
import { Container, Card, Grid, Label, Image, Menu, Modal, Divider, Button, Form, TextArea } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

import { User, authSubscribe, setDoc, uploadFile } from "@junobuild/core";
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

type TestimonialForm = {
  name: string;
  content: string;
  date: string;
  imageUrl: string;
};

type WorksForm = {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

function App() {

  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [testimonial, setTestimonial] = useState('');

  const [showImages, setShowImages] = useState(true);
  const [openHiking, setOpenHiking] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const [activeMenu, setActiveMenu] = useState("posts");
  const [user, setUser] = useState<User | null>(null);
  // Add these states inside App component
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState('');
  // Add this with other state declarations
  const [testimonialForm, setTestimonialForm] = useState<TestimonialForm>({
    name: '',
    content: '',
    date: moment().format('YYYY-MM-DD'),
    imageUrl: ''
  });
  const [testimonialLoading, setTestimonialLoading] = useState(false);
  const [showWorksForm, setShowWorksForm] = useState(false);
  const [worksForm, setWorksForm] = useState<WorksForm>({
    title: '',
    description: '',
    date: moment().format('YYYY-MM-DD'),
    imageUrl: ''
  });


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


  const submitTestimonial = async () => {
    if (!testimonialForm.name || !testimonialForm.content) return;
    setTestimonialLoading(true);
    const key = uuidv4();
    let downloadUrl = '';
    try {
      // Upload image if exists
      if (testimonialForm.file) {

        const filename = `${user.key}-${testimonialForm.file.name}`;
        const result = await uploadFile({
          data: testimonialForm.file,
          collection: "hortsun_testimonials",
          filename,
        });
        console.log(result.downloadUrl);
        downloadUrl = result.downloadUrl;
      }

      // Save testimonial document
      await setDoc({
        collection: "hortsun_testimonials",
        doc: {
          key: key,
          data: {
            id: key,
            name: testimonialForm.name,
            content: testimonialForm.content,
            date: testimonialForm.date,
            imageUrl: downloadUrl,
            created_at: new Date().getTime(),
            user_id: user.key
          }
        }
      });

      // Reset form and close modal
      setTestimonialForm({
        name: '',
        content: '',
        date: moment().format('YYYY-MM-DD'),
        imageUrl: ''
      });
      setShowTestimonialForm(false);
    } finally {
      setTestimonialLoading(false);
    }
  };

  const submitWorks = async () => {
    if (!worksForm.title || !worksForm.description) return;
    const key = uuidv4();   

    try {

      await setDoc({
        collection: "hortsun_works",
        doc: {
          key: key,
          data: {
            id: key,
            title: worksForm.title,
            description: worksForm.description,
            date: worksForm.date,
            imageUrl: worksForm.imageUrl,
            created_at: new Date().getTime(),
            user_id: user.key
          }
        }
      });

      setWorksForm({
        title: '',
        description: '',
        date: moment().format('YYYY-MM-DD'),
        imageUrl: ''
      });
      setShowWorksForm(false);
    } catch (error) {
      console.error('Error submitting works:', error);
    }
  };


  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item header>
          <Image
            src='logo.png'
            size='mini'
            style={{ marginRight: '1.5em' }}
          />
          Sun Garden
        </Menu.Item>
        <Menu.Item position='right'><Auth /></Menu.Item>
      </Menu>
      <Grid columns={2}>
        <Grid.Column mobile={16} computer={5}>
          <Card fluid>
            <Card.Content>
              Be a gardener: plant the seeds, nurture them with care, and reap the harvest.
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
            {user &&
              <Menu.Item>
                <Button fluid onClick={() => setShowTestimonialForm(true)}>Add Testimonial</Button>
              </Menu.Item>
            }
            {user &&
              <Menu.Item>
                <Button fluid onClick={() => setShowWorksForm(true)}>Add Works</Button>
              </Menu.Item>
            }
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
          <Form >
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
      <Modal
        size='small'
        open={showTestimonialForm}
        onClose={() => setShowTestimonialForm(false)}
      >
        <Modal.Header>Share Your Experience</Modal.Header>
        <Modal.Content>
          <Form loading={testimonialLoading}>
            <Form.Input
              label="Name"
              value={testimonialForm.name}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
              placeholder='Your name'
            />
            <Form.TextArea
              label="Testimonial"
              value={testimonialForm.content}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
              placeholder='Share your experience...'
            />
            <Form.Input
              type="date"
              label="Date"
              value={testimonialForm.date}
              onChange={(e) => setTestimonialForm({ ...testimonialForm, date: e.target.value })}
            />
            <Form.Input
              type="file"
              label="Upload Image"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setTestimonialForm({ ...testimonialForm, file: file });
              }}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setShowTestimonialForm(false)}>Cancel</Button>
          <Button positive loading={testimonialLoading} onClick={submitTestimonial}>Submit</Button>
        </Modal.Actions>
      </Modal>
      <Modal
        size='small'
        open={showWorksForm}
        onClose={() => setShowWorksForm(false)}
      >
        <Modal.Header>Add New Work</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Title"
              value={worksForm.title}
              onChange={(e) => setWorksForm({ ...worksForm, title: e.target.value })}
              placeholder='Work title'
            />
            <Form.TextArea
              label="Description"
              value={worksForm.description}
              onChange={(e) => setWorksForm({ ...worksForm, description: e.target.value })}
              placeholder='Describe your work...'
            />
            <Form.Input
              type="date"
              label="Date"
              value={worksForm.date}
              onChange={(e) => setWorksForm({ ...worksForm, date: e.target.value })}
            />
            <Form.Input
              label="Image URL"
              value={worksForm.imageUrl}
              onChange={(e) => setWorksForm({ ...worksForm, imageUrl: e.target.value })}
              placeholder='Work photo URL'
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setShowWorksForm(false)}>Cancel</Button>
          <Button positive onClick={submitWorks}>Submit</Button>
        </Modal.Actions>
      </Modal>

    </Container>

  )
}

export default App


