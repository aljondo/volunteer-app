import React, { Component } from 'react';
import { Button, Input, } from 'react-bootstrap';

//TODO Create these for each available user field
//TODO Format it so it looks nicer
//TODO Remember to write methods for each one in the OrgAboutMeContainer

const EditingOrgAboutMe = (props) =>  {
    return  (
        <div>
            <Input
                type="text"
                defaultValue={props.user.name}
                placeholder="The name showing in your profile"
                onChange={props.updateName}
                label="Name"
            />
            <Input
                type="text"
                defaultValue={props.user.phone}
                placeholder="The phone number that you can be reached"
                label="Phone"
            />
            <Input
                type="email"
                defaultValue={props.user.email}
                placeholder="The email address that you can be reached"
                onChange={props.updateEmail}
                label="Email"
            />
            <Input
                type="textarea"
                defaultValue={props.user.mission}
                placeholder="A short description of yourself"
                label="About me"
            />
            <Button bsStyle='primary' onClick={props.closeEdit}>Cancel</Button>
            <Button bsStyle='primary' onClick={props.applyUpdates}>Update</Button>
        </div>
    )

};

export default EditingOrgAboutMe