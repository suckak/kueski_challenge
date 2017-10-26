import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChatMessages extends Component {

    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        const that = this;

        this.props.socket.on('chat message', function(msg){
            let messages = that.state.messages;
            messages.push(msg);
            that.setState({
                messages
            });
        });
    }

    renderMessages(){
        return(
            this.state.messages.map( (msg,index) => {
                return (
                    <li className="list-item singleMessage" key={index}>{msg}</li>
                );
            })
        );
    }

    render(){
        console.log(this.state);
        return (
            <div className="chatMessages">
                <ul className="list-group">
                    {this.renderMessages()}
                </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(ChatMessages);