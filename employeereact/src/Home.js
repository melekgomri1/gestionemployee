import React,{Component} from 'react';
class Home extends React.Component{
    handlename =(e)=>{
        console.log(e.target.value)
      }
      handletextearea=(e)=>{
        console.log(e.target.value)
      }
    render(){
        return <div>
            <input type="text" placeholder="name" onChange={this.handlename}></input><br></br>
            welcome to home page and terminale<br></br>
            <textarea onChange={this.handletextearea}></textarea><br></br>
            Men :<input type="radio" name="b" value="men"></input>
            women:<input type="radio" name="b" value="women"></input><br></br>
            Tunisia :<input type="checkbox" name="b2" value="tunisia"></input>
            Algeria:<input type="checkbox" name="br" value="algeria"></input>
        </div>
    }
}
export default Home