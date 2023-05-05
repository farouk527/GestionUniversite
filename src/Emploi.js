import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Modal, Form, Icon } from 'semantic-ui-react';
import emploiDuTemps from './emploiapi';

function EmploiDuTempsTable() {
  const [data, setData] = useState(emploiDuTemps);
  const [filteredData, setFilteredData] = useState(emploiDuTemps);
  const [open, setOpen] = useState(false);
  const [newCours, setNewCours] = useState({});


  const handleSearch = (event) => {
    const filtered = emploiDuTemps.filter((cours) => {return (
      cours.enseignant.toLowerCase().includes(event.toLowerCase())||
        cours.jour.toLowerCase().includes(event.toLowerCase()) ||
        cours.salle.toLowerCase().includes(event.toLowerCase()) ||
        cours.matiere.toLowerCase().includes(event.toLowerCase()) ||
        cours.num_salle.toString().toLowerCase().includes(event.toLowerCase()) ||
        cours.heure.toLowerCase().includes(event.toLowerCase()) 
      );
    });
    setFilteredData(filtered);
  };
  
  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleSave = () => {
    const updatedData = [...data, newCours];
    setData(updatedData);
    setFilteredData(updatedData);
    setOpen(false);
    setNewCours({});
  };
  
  

  const handleChange = (e) => {
          const { name, value } = e.target;
          setNewCours((newCours) => ({ ...newCours, [name]: value }));
  };
  

  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <br />
      <Input placeholder='Rechercher...' onChange={(e) => handleSearch(e.target.value)} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Jour</Table.HeaderCell>
            <Table.HeaderCell>Salle</Table.HeaderCell>
            <Table.HeaderCell>Matière</Table.HeaderCell>
            <Table.HeaderCell>Numéro de salle</Table.HeaderCell>
            <Table.HeaderCell>Horaire</Table.HeaderCell>
            <Table.HeaderCell>Enseignant</Table.HeaderCell>
            <Table.HeaderCell>Supprimer</Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData.map((cours, index) => (
            <Table.Row key={index}>
              <Table.Cell>{cours.jour}</Table.Cell>
              <Table.Cell>{cours.salle}</Table.Cell>
              <Table.Cell>{cours.matiere}</Table.Cell>
              <Table.Cell>{cours.num_salle}</Table.Cell>
              <Table.Cell>{cours.heure}</Table.Cell>
              <Table.Cell>{cours.enseignant}</Table.Cell>



              <Table.Cell>
                <Button color='red' onClick={() => handleDelete(index)}><Icon name='delete'/>
                Supprimer</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button  onClick={() => handleAdd() } color="green" >
        
        <Icon name='add square'/>Ajouter</Button>
      
      <Modal open={open} onClose={handleClose}>
  <Modal.Header>Ajouter un cours</Modal.Header>
  <Modal.Content>
    <Form>
      <Form.Field required>
        <label>Jour</label>
        <Input name='jour' placeholder='Jour'   onChange={handleChange}  />
      </Form.Field>
      <Form.Field required>
        <label>Salle</label>
        <Input name='salle' placeholder='Salle' onChange={handleChange} required />
      </Form.Field>
      <Form.Field required>
        <label>Matière</label>
        <Input name='matiere' placeholder='Matière' onChange={handleChange} />
      </Form.Field>
      <Form.Field required>
        <label>Numéro de salle</label>
        <Input name='num_salle' placeholder='Numéro de salle' onChange={handleChange} />
      </Form.Field>
      <Form.Field required>
        <label>Horaire</label>
        <Input name='heure' placeholder='Horaire' onChange={handleChange} />
      </Form.Field>
      <Form.Field required>
        <label>Enseignant</label>
        <Input name='enseignant' placeholder='enseignant' onChange={handleChange} />
      </Form.Field>

    </Form>
  </Modal.Content>
  <Modal.Actions>
    <Button color='black' onClick={handleClose}>
      Annuler
    </Button>
    <Button
      content="Ajouter"
      labelPosition='right'
      icon='checkmark'
      onClick={handleSave}
      positive
    />
  </Modal.Actions>
</Modal>


     </div>
  );
}
export default EmploiDuTempsTable;
