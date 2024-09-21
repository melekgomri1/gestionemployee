import React,{Component} from 'react';
import Kamel from './Kamel';
class Samia extends React.Component{
    state={
        name:"melek",
        lastename:"gomri",
        age:12
    }
   
    render(){
        console.log(this.props);
        return <div>
            {this.state.name}<br></br>
            {this.state.lastename}<br></br>
            {this.state.age}
            
            <h1>Samia tajourya hhhh</h1>
            <Kamel data={this.state}/>  
        </div>
    }
}
export default Samia