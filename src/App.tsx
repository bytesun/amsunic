// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';
import { Container, Card, Grid, Header, Item, Menu, Message } from 'semantic-ui-react';

import { initJuno } from "@junobuild/core";
import { Auth } from "./components/Auth";
import Posts from './components/Posts';

type Status = {

  status: String,

};

function App() {
  const [user, setUser] = useState();

  const [file, setFile] = useState();
  const [items, setItems] = useState([]);
  useEffect(() => {

    (async () =>
      await initJuno({
        satelliteId: "ruc7a-fiaaa-aaaal-ab4ha-cai",
      }))();

  }, []);



  return (
    <Container>
     <Menu pointing secondary>
     <Menu.Item>Home</Menu.Item>
     {/* <Menu.Item>Photos</Menu.Item> */}
     <Menu.Item position='right'><Auth /></Menu.Item>
     </Menu>
      <Grid columns={2}>
        <Grid.Column mobile={12} computer={5}>
          <Card>
            <Card.Content>
              <Card.Header>Sun</Card.Header>
              <Card.Meta><a href="https://twitter.com/orcsun" target='_blank'>twitter: @orcsun</a></Card.Meta>
              <Card.Description>
                This is my personal website
              </Card.Description>
              <Card.Description>
                Beside posting my stuff, try to demostrate how to integrate other projects in IC ecostystem.
              </Card.Description>

            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content>
              <Card.Header>Integrations</Card.Header>
              <Card.Meta><a href="https://juno.build/" target='_blank'>Juno(hosting and storage)</a></Card.Meta>
              <Card.Meta><a href="https://github.com/ICEvent/Inbox" target='_blank'>Inbox(wallet/message)</a></Card.Meta>
              <Card.Meta><a href="https://oneblock.page/" target='_blank'>Oneblock(profile)</a></Card.Meta>
              <Card.Meta><a href="https://vfclb-tyaaa-aaaap-aawna-cai.ic0.app/" target='_blank'>Blocklist(escrow)</a></Card.Meta>
              <Card.Meta><a href="https://icevent.app/" target='_blank'>ICEvent(calendar/todo/note)</a></Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column  mobile={12} computer={11}>
          <Posts />
        </Grid.Column>
      </Grid>

    </Container>

  )
}

export default App
