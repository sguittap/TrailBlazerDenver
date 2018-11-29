import React from 'react';
import { Card, Button} from 'semantic-ui-react';
import { Container, Row, Col } from 'reactstrap';
//import { Button } from 'reactstrap';
import { Table } from 'reactstrap';





const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <div key={trail._id}>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Info</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trail.name}</td>
                        <td>{trail.location}</td>
                        <td>{trail.description}</td>
                        <td>{trail.rating}/5</td>
                    </tr>
                </tbody>
                </Table>
                <Button color="primary" size="sm" onClick ={props.openAndEdit.bind(null, trail)}>Edit</Button>
                <Button color="secondary" size="sm" onClick={props.deleteTrail.bind(null, trail._id)}>Delete</Button>
            </div>
        )
    })
    return (
        <div>
            <h3>Trails</h3>
                {trails}
        </div>
    )
}

export default Trails;

