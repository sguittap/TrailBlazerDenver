import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditTrail = (props) => {
    console.log(props)
    return (
        <Modal open={props.open}>
            <Header>Edit Trail</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                    <Label>
                        Name:  
                    </Label>
                    <Form.Input type='text' name='name' value={props.trailToEdit.name} onChange={props.handleEditChange} />
                    <Label>
                        Location: 
                    </Label>
                    <Form.Input type='text' name='location' value={props.trailToEdit.location} onChange={props.handleEditChange} />
                    <Label>
                        Description:
                    </Label>
                    <Form.Input type='text' name='description' value={props.trailToEdit.description} onChange={props.handleEditChange} />
                    <Label>
                        Rating:
                    <Form.Input type='number' name='rating' value={props.trailToEdit.rating} onChange={props.handleEditChange} />
                    </Label>

                    <Modal.Actions>
                        <Button color="blue" type='submit'>Edit Trail</Button>        
                    </Modal.Actions>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditTrail;