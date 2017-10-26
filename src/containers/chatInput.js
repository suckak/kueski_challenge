import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChatInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            message : ''
        }
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            this.sendMessage();
        }
    }

    sendMessage(){
        this.props.socket.emit('chat message', `${this.props.user}: ${this.state.message}`);
        this.setState({
            message:''
        });
    }

    render(){

        return (
            <div>
                <input id="m" value={this.state.message} onKeyPress={this.handleKeyPress.bind(this)}
                       onChange={(e)=>{this.setState({message:e.target.value})}}/>
                <button onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {...state}
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatInput);