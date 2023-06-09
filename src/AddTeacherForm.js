import React, { useState } from 'react';
import { Form, Button, Grid, Icon } from 'semantic-ui-react';

const AddTeacherForm = () => {

    const [MyRole,setRole]=useState('Enseignant');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cin, setCin] = useState('');
    const [Firstname, setFisrtname] = useState('');
    const [Lastname, setLastname] = useState('');

  const handleSubmit = (e) => {
  
  };

  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
    <h1 style={{color:"black"}}>AJOUTER ENSEIGNANT</h1>
    <Grid centered middle>
      <Grid.Column width={6}>
      <Form onSubmit={handleSubmit}>
      <label>Firstname : 
              <Form.Input 
              fluid 
              icon="user" 
              iconPosition="left" 
              placeholder="Firstname" 
              type="text" 
              value={Firstname} 
              onChange={(e) => setFisrtname(e.target.value)}
              className="auth-input"
            >
                          </Form.Input>

              </label>
              <label> Lastname:
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
              </label>
           
            <label>
            Email:  
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
            </label>
          <label>
            Password:
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
          </label>
           
          <label>Numéro de CIN:
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
          </label>
           
        <br/> 
         <Button type="submit" color='green' ><Icon name="add"  />AJOUTER</Button>
        </Form>
      </Grid.Column>
    </Grid>
    </div>
  );
};


export default AddTeacherForm;
