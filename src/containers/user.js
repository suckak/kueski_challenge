import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const io = require('socket.io-client');
const socket = io();

import {setUser} from "../actions/index";
import Chat from './chat';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    }

    changeName(event){
       if(event.target.value){
            this.setState({username : event.target.value});

        }
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            this.setUser();
        }
    }

    setUser(){
        this.props.setUser(this.state.username);
    }

    render(){
        return(
            <div className="userPrompt">
                <h3>Welcome!</h3>
                <p>Enter username:</p>
                <input type="text" value={this.state.username}
                       onKeyPress={this.handleKeyPress.bind(this)}
                       onChange={this.changeName.bind(this)}/>
                <button onClick={this.setUser.bind(this)} className="button-info">save</button>
            </div>
        );
    }
}

function mapStateToProps(state){

    return {...state.dataReducer}
}

function mapDispatchToProps(dispatch){
    return {
        setUser : bindActionCreators(setUser,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);