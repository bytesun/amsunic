import React from 'react';
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

const Tong: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Segment  vertical textAlign='center' className='hero' style={{ backgroundColor: '#FFA07A' }}>
        <Container text>
          <p style={{ fontSize: '1.5em' }}>
          Common Value
          </p>
        </Container>
      </Segment>

      {/* Two Columns Section */}
      <Segment vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header inverted as='h3'>Guides</Header>
              <p>
                
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header inverted as='h3'>Comments</Header>
              <p>
                
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Tong;
