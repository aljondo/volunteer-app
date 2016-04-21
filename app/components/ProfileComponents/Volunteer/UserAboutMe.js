import React, { Component } from 'react';
import {Col, Button, Popover, ButtonToolbar, OverlayTrigger, Overlay, Modal, Input} from 'react-bootstrap';
import styles from './useraboutme.scss'
import Icon from 'react-fa';

const AboutMe = (props) => {

    return (
        <div className={styles.aboutPanel}>
            <img className={styles.profimg} src={props.user.image}  alt="user"/>
            <h1 className={styles.name}>{props.user.name}</h1>
            <div>

                <p className={styles.bio}>{props.user.bio}</p>
                <div className={styles.contact}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Icon name="phone" size={'2x'} />
                    </div>
                    <div className={styles.text}>
                      {props.user.phone}
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Icon name="envelope" size={'2x'} />
                    </div>
                    <div className={styles.text}>
                      {props.user.email}
                    </div>
                  </div>
                </div>
                <div className={styles.skills}>
                <p className={styles.title}>Skills:</p>
                <ul>
                    {props.user.skills.map(function(skill, index){
                       return <li key={ index }>{skill}</li>;
                    })}
                </ul>
                </div>
            </div>
            <Button className={styles.edit} bsStyle="primary" onClick={props.openEdit}>Edit Profile</Button>
        </div>
    );

};


export default AboutMe;
