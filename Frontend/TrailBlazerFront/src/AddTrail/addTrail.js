import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';



class AddTrail extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            location: '',
            description: '',
            rating: '',
        }
    };
    updateTrail = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };
    render(){
        console.log("GOT HERE 2");
        return (
            <form onSubmit={this.props.addTrail.bind(null, this.state)}>
                <label>
                    Trail:
                    <input type='text' name='name' value={this.state.name} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Location:
                    <input type='text' name='location' value={this.state.location} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Description:
                    <input type='text' name='description' value={this.state.description} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Rating:
                    <input type='number' name='rating' value={this.state.rating} onChange={this.updateTrail}/>  
                </label>
                <Button color="secondary" size="sm" type='Submit'>Add the Trail</Button>

            </form>
            )
    }
}

export default AddTrail;