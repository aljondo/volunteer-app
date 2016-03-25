import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import AboutMe from './AboutMe.js';
import ReactDOM from 'react-dom';


class Popup extends Component {
    render() {                   
        return  (
            <div id="add" className="modal fade">  
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Editing Information</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" defaultValue={this.props.name} ref="nameinput"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Phone</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control"  defaultValue={this.props.phone} ref="phoneinput"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="input" className="form-control"  defaultValue={this.props.email} ref="emailinput"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">About</label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control"  defaultValue={this.props.about} ref="aboutinput"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-dismiss="modal" className="btn btn-success" onClick={this.props.onSaveClick}>Save</button>
                            <button type="button" data-dismiss="modal" className="btn btn-danger"onClick={this.props.onCancelClick}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            )
       }
                            
}

export default Popup