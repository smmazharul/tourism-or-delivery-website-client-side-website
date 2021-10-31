import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Email</th>
      <th>Phone</th>
      <th>Media</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>fooddv1@gmail.com</td>
      <td>+55445465449</td>
      <td>Linkdin</td>
    </tr>
    <tr>
     
      <td>fooddv1@gmail.com</td>
      <td>+55445465449</td>
      <td>Facebook</td>
    </tr>
    <tr>
      <td>fooddv1@gmail.com</td>
      <td>+55445465449</td>
      <td>twitter</td>
    </tr>
  </tbody>
</Table>
</Container>
        </div>
    );
};

export default Footer;