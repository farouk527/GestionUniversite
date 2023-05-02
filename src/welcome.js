import React from 'react';
import { Container, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import img from "./img.jpg"
const HomePage = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${img})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      minHeight: '100vh',
      height: 'calc(var(--vh, 1vh) * 100)',
      width: '100%'
    }}>        <Container>
          <h1 style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0 }}>
            Bienvenue à Mon APPLICATION!
          </h1>
          
            <Link to="/description" style={{ marginTop: '1em', textDecoration: 'underline' }}>
              Get Started
              <Icon name='right arrow' />
          </Link>
        </Container>
    </div>
  );
};

export default HomePage;
