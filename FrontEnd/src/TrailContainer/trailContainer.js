import React, { Component } from 'react';
import AddTrail from '../AddTrail/addTrail';
import TrailList from '../TrailList/trailList';
import EditTrail from '../EditTrail/editTrail';
import WeatherData from '../WeatherData/weatherData';
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Map from '../Map/map';
import { Grid } from 'semantic-ui-react';

const My404 = () => {
    return (
      <div>
        You're Lost
      </div>
      )
};



const lat = '39.74';
const lon = '-105';

class TrailContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            trails: [],
            weather: [],
            trailToEdit: {
                name: '',
                location: '',
                description: '',
                rating: '',
                _id: ''
            },
           showEditModal: false
        }
    }

getTrails = async () => {
    const trails = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS/api/v1/trails}`);
    const trailsParsedJSON = await trails.json();
    return trailsParsedJSON
}
componentDidMount(){
    this.getTrails().then((trails) => {
        this.setState({trails: trails.data})
    }).catch((err) => {
        console.log(err);
    })
    this.getWeather().then((data) => {
      console.log(data, 'this is data');
      this.setState({weather: data});
  
    }).catch((err) => {
      console.log(err);
    });
}

addTrail = async (trail, e) => {
    e.preventDefault();
    console.log(trail);

    try {
        const addedTrail = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS/api/v1/trails}`, {
            method: 'POST',
            body: JSON.stringify(trail),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await addedTrail.json();
        console.log(parsedResponse, ' this is response')

        this.setState({trails: [...this.state.trails, parsedResponse.data]})
        this.props.history.push("/trails")

        } catch(err){
            console.log(err)
        }
}
deleteTrail = async (id) => {
    console.log(id, ' deleteTrail');
    const deleteTrailResponse = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS/api/v1/trails}` + id, {
        method: 'DELETE'
    });

    const deleteTrailParsed = await deleteTrailResponse.json();
    this.setState({trails: this.state.trails.filter((trail) => trail._id !== id)})
    console.log(deleteTrailParsed, ' response from server')
    
}
handleEditChange = (e) => {
    this.setState({
        trailToEdit: {
            ...this.state.trailToEdit,
            [e.currentTarget.name]: e.currentTarget.value
        }
    });

}

closeAndEdit = async (e) => {
    e.preventDefault();
    try {
        const editResponse = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS/api/v1/trails}` + this.state.trailToEdit._id, {
            method: 'PUT',
            body: JSON.stringify({
                name: this.state.trailToEdit.name,
                location: this.state.trailToEdit.location,
                description: this.state.trailToEdit.description,
                rating: this.state.trailToEdit.rating
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const editResponseParsed = await editResponse.json();

        const newTrailArrayWithEdit = this.state.trails.map((trail) => {

            if(trail._id === editResponseParsed.data._id){
                trail = editResponseParsed.data
            }

            return trail
        });

        this.setState({
            showEditModal: false,
            trails: newTrailArrayWithEdit
        });

        console.log(editResponseParsed, ' parsed edit')

    } catch(err){
        console.log(err)
    }
}
openAndEdit = (trailFromTheList) => {
    console.log(trailFromTheList, ' trail to edit');

    this.setState({
        showEditModal: true,
        trailToEdit: {
            ...trailFromTheList
        }
    })
}

getWeather = async () => {

    try{
      const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=d177ecaf5436da5c14f410fb73b64b4d`);
      const weatherJson = await weather.json();
      return weatherJson
    } catch(err){
      return err;
    }
  }
  

render(){
    console.log(this.state)
    return (   
        <Container>   
        <Switch>
             <Route exact path="/trail/addTrail" render={()=>{
                return(<AddTrail addTrail={this.addTrail}/>
                )}}/>
        </Switch>
            <Row>
                <EditTrail open={this.state.showEditModal} trailToEdit={this.state.trailToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
                <Col xs="9"><TrailList trails={this.state.trails} deleteTrail={this.deleteTrail} addTrail={this.addTrail} openAndEdit={this.openAndEdit} /><Map/></Col>
                <Col xs="3"><WeatherData weather={this.state.weather}/></Col>  
            </Row>
        </Container>
        )
    }
}
export default TrailContainer;
