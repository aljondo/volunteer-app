import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import List from './List.js';
import Popup from './Popup.js';

const skills = [
       "Math",
       "Japanese",
       "React",
       "Sleep"
];

const interests = [
       "HTML",
       "Database",
       "React",
       "Sleep"
];

class AboutMe extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isEditing : false,
            name : "Shiyu Wang",
            about : "Originally from Chengdu, China, Qiuting Wang is majoring in jewelry at the Savannah College of Art and Design. She anticipates to graduate in May 2016 with a Bachelor of Fine Arts. She has been learning drawing and painting since childhood.",
            phone : "(888)233-6666",
            email : "Wang.shiyu@husky.neu.edu",
            skills,
            interests

        };
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return(
                <div>
                    <Popup  
                        name = {this.state.name}
                        about = {this.state.about}
                        phone = {this.state.phone}
                        email = {this.state.email}
                        onSaveClick = {this.onSaveClick.bind(this)}   
                        onCancelClick = {this.onCancelClick.bind(this)} 
                    />
                </div>
                )
        };
        return (<Button onClick={this.onEditClick.bind(this)}>Edit</Button>)
    }

        render() {
        return (
            <div>
                <img src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEKgew92pwh3t6IaIj3PazmaN3yia21164I6mvCkFTTr96s5mG'}  alt="user" className="img-responsive"/>
                <h1>{this.state.name}</h1>
                <div>
                    <h2>Profile</h2>
                    <strong>About</strong>
                    <p>{this.state.about}</p>
                    <strong>Skills</strong>
                    <List members = {this.state.skills}/>
                    <strong>Interests</strong>
                    <List members = {this.state.interests}/>
                    <p>
                        <strong>Phone #: </strong>
                        <span>{this.state.phone}</span>
                    </p>
                    <p>
                        <strong>Email: </strong>
                        <span>{this.state.email}</span>
                    </p>
                        {this.renderActionSection()}
                </div>
            </div>

        );
                }

                onEditClick() {
                    this.setState({ isEditing: true });
                }
                
                onSaveClick(event) {
                    this.setState({ 
                        isEditing: false,
                    });
                }
                
                onCancelClick() {
                    this.setState({ isEditing: false });
                }
                
}

export default AboutMe;