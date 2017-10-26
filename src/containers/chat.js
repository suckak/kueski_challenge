import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatInput from './chatInput';
import ChatMessages from './chatMessages';

class Chat extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="chatHolder container">
                <ChatMessages {...this.props}/>
                <ChatInput {...this.props} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Chat);