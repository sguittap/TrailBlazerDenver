import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class LogIn extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            isLoggedIn: false
        }
    }
    checkForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
        
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Password:<input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit"  value="Submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LogIn;