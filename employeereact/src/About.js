import React, { Component } from 'react';

import { connect } from 'react-redux';

class About extends React.Component {


  render() {
    return (
      <div>
        <h1>x: {this.props.x}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
       
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    x:state.x
  }
}
function mapDispatchToProps(dispatch){
  return{
    increment:()=>dispatch({type:"INCREMENT"}),
    decrement:()=>dispatch({type:"DECREMENT"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
