import React, { Component } from 'react';

class Channels extends Component {

    constructor(props){
        super(props);
        this.state = {
            channels : [
                'channel 1',
                'channel 2',
                'channel 3',
                'channel 4'
            ],
            selected:1
        };
    }

    isSelected(index){
        if(index===this.state.selected){
            return 'selected';
        }else{
            ''
        }
    }

    selectChannel(index) {
        this.setState({
            selected: index
        });
    }


    renderChannels(){
        return this.state.channels.map((val,index)=>{
            return(
                <li key={index} className={`list-item ${this.isSelected.bind(this)(index)}`}
                    onClick={this.selectChannel.bind(this,index)}>
                    <a href="#">{val}</a>
                </li>
            );
        });
    }

    render(){
        return (
            <div className="channels container">
                <h5>Channels</h5>
                <ul className="list-group">
                    {this.renderChannels()}
                </ul>
            </div>
        );
    }
}

export default Channels;