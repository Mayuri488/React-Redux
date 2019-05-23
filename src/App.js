import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { updateUser } from './actions/userActions'
import { apiRequest} from './actions/apirequest'
//import {bindActionCreators} from 'redux';

class App extends Component{

  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount(){
    setTimeout(()=> {
      this.props.onApiRequest();
    }, 1500);
    
  }
  onUpdateUser(event){
   this.props.onUpdateUser(event.target.value);
  }

  render(){
    console.log('render :'+ JSON.stringify(this.props));
    return (<div className="App">
    <input onChange={this.onUpdateUser}></input>
    {this.props.users}
  </div>)
  }
}

const mapStatesToProps = (state, props) => {
  console.log('mapStatesToProps : '+JSON.stringify(props))  ;

  return{
    products: state.products,
    users: state.users,
    userPlusProp: `${state.users} ${props.aRandomProps}`
  }
};

// const mapActionToProps = (dispatch, props) => {
//   return bindActionCreators({
//     onUpdateUser : updateUser
//   }, dispatch);
// }

const mapActionToProps = {
  onUpdateUser : updateUser,
  onApiRequest : apiRequest
 }


// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('merge :'+propsFromState, propsFromDispatch, ownProps);
//   return {}
// }
export default connect(mapStatesToProps, mapActionToProps)(App);
