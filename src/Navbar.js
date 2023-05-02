import React, { useContext, useState } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [colorname , setColorname] = useState('home');

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', false);
  };
const setColorChange = (event) => {
  setColorname(event)
}
  
 return (
    <Menu>
      <Menu.Item header>My APPLICATION </Menu.Item>

                <Menu.Item >

      <Button  name='home' onClick={()=>setColorChange("home")} color={colorname == "home" ? 'red' :'black' }  as={NavLink} to='/Welcome'>
      <Icon  name='home '/> HOME</Button>
      </Menu.Item>

      <Menu.Item  >
        <Button onClick={()=>setColorChange("add_etudiant")} color={colorname == "add_etudiant" ? 'red' :'black' } as={NavLink} to='/add_etudiant'>

        <Icon name='add user'/> 
        ADD_ETUDIANT
        
        </Button>
        </Menu.Item>

        <Menu.Item>
        <Button  onClick={()=>setColorChange("add_enseignant")} color={colorname == "add_enseignant" ? 'red' :'black' } as={NavLink} to='/add_enseignant'>
          
        <Icon name='add user'/>
        
        ADD_ENSEIGNANT</Button>
        </Menu.Item>
        <Menu.Item>
        <Button onClick={()=>setColorChange("liste_etudiant")} color={colorname == "liste_etudiant" ? 'red' :'black' } as={NavLink} to='/liste_etudiant'>
        <Icon name='list'/>
        LISTE_ETUDIANT</Button>
        </Menu.Item>
        <Menu.Item>
        <Button  onClick={()=>setColorChange("liste_enseignant")} color={colorname == "liste_enseignant" ? 'red' :'black' } as={NavLink} to='/liste_enseignant'>
        <Icon name='list'/>
        LITSE_ENSEIGNANT
        </Button>
        </Menu.Item>
        <Menu.Item>
        <Button onClick={()=>setColorChange("emploi")} color={colorname == "emploi" ? 'red' :'black' }  as={NavLink} to='/emploi'>
        <Icon name='table'/>
            EMPLOI
            </Button >
            </Menu.Item>
            
        <Menu.Item as='a' position='right'>
        <Button  onClick={logout} color="black"><Icon name=' log out'/> 
        LOUGOUT</Button>

            
        </Menu.Item>
        

     

        
     
    </Menu>

    
  );
};

export default Navbar;
