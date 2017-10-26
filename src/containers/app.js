import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const io = require('socket.io-client');
const socket = io();

import {setUser} from "../actions/index";
import User from './user';
import Chat from './chat';
import Channels from '../components/Channels';
import Users from '../components/Users';

class App extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                { this.props.user ?
                    <div>
                        <p className="hello"><b>User:</b> {this.props.user}</p>
                        <div className="mainContainer">

                            <div className="listas">
                                <Channels/>
                                <Users/>
                            </div>

                            <Chat socket={socket} user={this.props.user}/>

                        </div>
                    </div>
                    : <User/>}
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

export default connect(mapStateToProps,mapDispatchToProps)(App);