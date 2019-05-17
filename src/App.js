import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { updateUser } from './actions/userActions'

class App extends Component{

  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(){
    this.props.onUpdateUser('Pradnya');
  }

  render(){
    return (<div className="App">
    <div onClick= {this.onUpdateUser}>Update User</div>
    {this.props.users}
  </div>)
  }
}

const mapStatesToProps = state => ({
  products: state.products,
  users: state.users
});

const mapActionToProps = {
onUpdateUser : updateUser
}

export default connect(mapStatesToProps, mapActionToProps)(App);
