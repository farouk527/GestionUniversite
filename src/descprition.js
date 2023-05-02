import React, { useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Modal, Form, Ref } from 'semantic-ui-react';
import { Container, Header, Segment, Icon, Grid, Card, Menu } from 'semantic-ui-react';

function DescriptionPage() {
 
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  

  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Button color='red' onClick={() => scrollToSection(section1Ref)}> <Icon name="arrow circle down"/> Consulter </Button>

    

      <br/>
      <br/>

      <Segment>
        <h1>Voici une brève description de notre application...</h1>
      </Segment>

      <div ref={section1Ref} id="section1">
      <Container>
      <Header as='h1'>Partie 1</Header>
      
      
      <Segment attached='bottom'>
        <Header as='h2'>Gestion des enseignants</Header>
        <Grid columns={3} doubling>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Icon name='user' size='huge' />
                <br/>
                <br/>
                <Card.Header>Gestion des enseignants</Card.Header>
                <Card.Description>
                  Notre application vous permet de gérer les enseignants et leur emploi du temps.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
      
      
    </Container>
      </div>

      <div ref={section2Ref} id="section2">
      <Container>
      <Header as='h1'>Partie 2</Header>

      <Segment attached='bottom'>
        <Header as='h2'>Gestion des étudiants</Header>
        <Grid columns={3} doubling>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Icon name='graduation cap' size='huge' />
                <Card.Header>Gestion des étudiants</Card.Header>
                <Card.Description>
                  Vous pouvez également gérer les étudiants et leur emploi du temps.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
     
    </Container>
      </div>
      

      <div ref={section3Ref} id="section3">
      </div>
      <Container>
      <Header as='h1'>Partie 3</Header>

      <Segment attached='bottom'>
        <Header as='h2'>Gestion de l'emploi du temps</Header>
        <Grid columns={3} doubling>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Icon name='calendar alternate' size='huge' />
                <br/>
                <br/>
                <Card.Header>Gestion de l'emploi du temps</Card.Header>
                <Card.Description>
                  Notre application vous permet de gérer facilement l'emploi du temps des enseignants et des étudiants.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
      </Container>
    </div>
  );
}
export default DescriptionPage;
