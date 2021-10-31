import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrder = () => {
    return (
        <div>
            <h2>Manage order</h2>
            <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
             </Table>
             </Container>
        </div>
    );
};

export default ManageOrder;