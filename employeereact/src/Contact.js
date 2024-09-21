import React,{Component} from 'react';
class Contact extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentdidmount")
    }
   
    render(){
        console.log("cc")
        return <div>
            
            <h1>samia w kamel l mba3bsin</h1>
           
        </div>
    }
}
export default Contact