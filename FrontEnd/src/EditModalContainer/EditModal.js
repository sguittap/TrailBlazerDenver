import React, {Component} from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class EditTrail extends Component{
    constructor(){
        super();
        this.setState={
            name:'',
            location:'',
            description:'',
            rating:'',
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    };
    toggle(){
        this.setState({
            modal: false,
        })
    };
    showModal = (id, e) => {
        const trailToEdit = this.state.trail.find((trail) => trail._id === id)
        this.setState({
            showEdit: true,
            editTrailId: id,
            TrailToEdit: trailToEdit
            });
}


    render(){
        console.log(this.props)
        return (
            <div>
                <Modal isOpen={this.props.showModal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit the Trail</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.props.closeAndEdit.bind(null, this.state)}>
                            <label>
                                Name: 
                                <input type='text' name='name' value={this.props.trailToEdit.name} onChange={this.handleEditChange} />
                            </label>
                            <label>
                                Location: 
                                <input type='text' name='location' value={this.props.trailToEdit.location} onChange={this.handleEditChange} />
                            </label>
                            <label>
                                Description:
                                <input type='text' name='description' value={this.props.trailToEdit.description} onChange={this.handleEditChange} />
                            </label>
                            <label>
                                Rating:
                                <input type='number' name='rating' value={this.props.trailToEdit.rating} onChange={this.handleEditChange} />
                            </label>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

export default EditTrail;