import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment,Select} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const SignUpPage = () => {
  const MyRole=[ { key: 'af', value: 'af', text: 'Enseignant' },
  { key: 'ax', value: 'ax', text: 'Etudiant' }];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cin, setCin] = useState('');
  const [verif,setverif] = useState(false);
  const [Firstname, setFisrtname] = useState('');

  const [Lastname, setLastname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/v1/users/createUser', {
      // TODO: handle error
    });
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh', backgroundColor:"#f5f9fb" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign up for an Account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
          
        
          <Form.Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="Firstname" 
              type="text" 
              value={Firstname} 
              onChange={(e) => setFisrtname(e.target.value)}
              className="auth-input"
            />
            <Form.Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="Lastname" 
              type="text" 
              value={Lastname} 
              onChange={(e) => setLastname(e.target.value)}
              className="auth-input"
            />
            
            <Form.Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="E-mail address" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
            <Form.Input 
              fluid 
              icon="lock" 
              iconPosition="left" 
              placeholder="Password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          
           
            
            
            
            <Form.Input 
              fluid 
              icon="id card" 
              iconPosition="left" 
              placeholder="CIN" 
              type="text" 
              value={cin} 
              onChange={(e) => setCin(e.target.value)}
              className="auth-input"
            />
           
          <Form.Input >
            
          <Select   placeholder='Selectionner le role' options={MyRole} />

          </Form.Input>
         
            <Button color="teal" fluid size="large" type="submit" className="auth-button">
              Sign up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/">Login</Link>
        </Message>
        {verif  && <Navigate to="/" />}
      </Grid.Column>
    </Grid>
  );
};

export default SignUpPage;