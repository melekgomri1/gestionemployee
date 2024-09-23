import axios from 'axios';
import React, { Component } from 'react';

class Contact extends React.Component {
    state = {
        contacts: [],
        contact: {
          name: '',
          lastname: '',
          numtelephone: '',
          email: '',
          contact: '',
        },
      };

    componentDidMount() {
        //Correction : accès à "response.data" pour récupérer les données de l'API
       axios.get('http://localhost:3100/contact/getall')
            .then((response) => {
                 //S'assurer que les données sont bien dans "response.data"
               this.setState({ contacts: response.data });
            })
            .catch((error) => console.error(error)); // Gestion des erreurs
    }
    handlename=(e)=>{
        this.setState({
            contact:{
                ...this.state.contact,
                name:e.target.value
            }
        })
    }
    handlelastname=(e)=>{
        this.setState({
            contact:{
                ...this.state.contact,
                lastname:e.target.value
            }
        })
    }
    handlenumtelephone=(e)=>{
        this.setState({
            contact:{
                ...this.state.contact,
                numtelephone:e.target.value
            }
        })
    }
    handleemail=(e)=>{
        this.setState({
            contact:{
                ...this.state.contact,
                email:e.target.value
            }
        })
    }
    handlecontact=(e)=>{
        this.setState({
            contact:{
                ...this.state.contact,
                contact:e.target.value
            }
        })
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        
       await axios.post('http://localhost:3100/contact/addcontact',this.state.contact).then(response=>console.log(response.data))
        axios.get('http://localhost:3100/contact/getall')
        .then((response) => {
             //S'assurer que les données sont bien dans "response.data"
           this.setState({ contacts: response.data });
        })
        .catch((error) => console.error(error)); 
        
    }

    render() {
        return (
            <div>
                {this.state.contacts.map((item, key) => (
                    <ul key={key}>
                        <li>{item.name}</li>
                        <li>{item.lastname}</li>
                        <li>{item.numtelephone}</li>
                    </ul>
                ))}
              name: <input type="text" onChange={this.handlename}></input>
               lastname: <input type="text" onChange={this.handlelastname}></input>
                numtelephone:<input type="number" onChange={this.handlenumtelephone}></input>
                email:<input type="email" onChange={this.handleemail}></input>
                contact:<input type="text" onChange={this.handlecontact}></input>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        );
       
    }
}

export default Contact;
