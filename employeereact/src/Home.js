import React,{Component} from 'react';
class Home extends React.Component{
   
    render(){
        return <div>
            <h1>hello fabiano caruana</h1>
            <input type="text" placeholder="name" ></input><br></br>
            welcome to home page and terminale<br></br>
            <textarea ></textarea><br></br>
            Men :<input type="radio" name="b" value="men"></input>
            women:<input type="radio" name="b" value="women"></input><br></br>
            Tunisia :<input type="checkbox" name="b2" value="tunisia"></input>
            Algeria:<input type="checkbox" name="br" value="algeria"></input><br></br>
            <select>
                <option value="tunisia">Tunisia</option>
                <option value="algeria">algeria</option>
                <option value="lebya">lebya</option>
                <option value="maroco">Maroco</option>
            </select>
        </div>
    }
}
export default Home