import React, { Component } from 'react';

import { connect } from 'react-redux';

class Melek extends React.Component {


  render() {
    return (
      <div>
        <h1>x: {this.props.x}</h1>
        <h1>my name is :{this.props.firstname}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
       
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    x:state.x,
    firstname:state.firstname

  }
}
function mapDispatchToProps(dispatch){
  return{
    increment:()=>dispatch({type:"INCREMENT"}),
    decrement:()=>dispatch({type:"DECREMENT"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Melek);
