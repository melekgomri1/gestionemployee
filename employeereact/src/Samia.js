import React,{Component} from 'react';
import Kamel from './Kamel';
class Samia extends React.Component{
    state={
        name:"melek",
        lastename:"gomri",
        age:12,
        x:0,
    }
   componentDidMount(){
    console.log("componentDidMount");
   }
   componentDidUpdate(prevProps,prevState,snapshot){
    console.log(prevState);
    console.log("componentDidUpdate");
   }
    render(){
        console.log("render");;
        return <div>
            {this.state.name}<br></br>
            {this.state.lastename}<br></br>
            {this.state.age}<br></br>
            {this.state.x}<br></br>
            <button onClick={()=>{this.setState({x:this.state.x+1})}}>Increment</button><br></br>
            <button onClick={()=>{this.setState({x:this.state.x-1})}}>Decrement</button>
            
            <h1>Samia tajourya hhhh</h1>
            <Kamel data={this.state}/>  
        </div>
    }
}
export default Samia