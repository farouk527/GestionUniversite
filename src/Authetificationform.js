import React, { useState ,useContext,useEffect} from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';



  const AuthenticationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'benalaya@gmail.com' && password === '123456') {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated',true)
      }
      else  {
        setError(true);
        localStorage.setItem('isAuthenticated',false)


      };

  }

  return (

    <Grid textAlign="center" style={{ height: '100vh',    backgroundColor:"#f5f9fb"}} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 ,}} shadow="10">
        <Header as="h2" color="teal" textAlign="center">
          <Segment>
          <Icon name="key"/>  

          Log-in pour votre Compte  

          </Segment>
         
        </Header>

        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
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
          
            <Button color="teal" fluid size="large" type="submit" className="auth-button">
              Login
            </Button>
            {isAuthenticated   && <Navigate to="/welcome" />}
            <Link to="/signup">Pas encore inscrit ? Créer un compte</Link>
          </Segment>
          {error && 
          <Message negative>
              <p>email ou password incorrect. essayer encore fois.</p>
            </Message>
          }
        </Form> 
      </Grid.Column>
    </Grid>
    
    
  );
};

export default AuthenticationPage;