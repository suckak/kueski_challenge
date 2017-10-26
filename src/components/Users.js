import React, { Component } from 'react';

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : [
                'user 1',
                'user 2',
                'user 3',
                'user 4'
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


    renderUsers(){
        return this.state.users.map((val,index)=>{
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
            <div className="users container">
                <h5>Users</h5>
                <ul className="list-group">
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default Users;