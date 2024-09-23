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
    // Récupérer les contacts lors du montage du composant
    axios.get('http://localhost:3100/contact/getall')
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => console.error(error));
  }

  // Méthode pour supprimer un contact
  handleDelete = (id) => {
    axios.delete(`http://localhost:3100/contact/delete/${id}`)
      .then((response) => {
        console.log('Contact deleted:', response.data);

        // Mise à jour de l'état après la suppression du contact
        this.setState({
          contacts: this.state.contacts.filter(contact => contact._id !== id)
        });
      })
      .catch((error) => console.error(error));
  };

  // Méthodes de gestion des changements pour les inputs
  handlename = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        name: e.target.value,
      },
    });
  };

  handlelastname = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        lastname: e.target.value,
      },
    });
  };

  handlenumtelephone = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        numtelephone: e.target.value,
      },
    });
  };

  handleemail = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        email: e.target.value,
      },
    });
  };

  handlecontact = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        contact: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3100/contact/addcontact', this.state.contact)
      .then((response) => console.log(response.data));

    // Rechargement des contacts après l'ajout d'un nouveau
    axios.get('http://localhost:3100/contact/getall')
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        {this.state.contacts.map((item, key) => (
          <ul key={key}>
            <li>{item.name}</li>
            <li>{item.lastname}</li>
            <li>{item.numtelephone}</li>
            <button onClick={() => this.handleDelete(item._id)}>Delete</button> {/* Bouton Delete */}
          </ul>
        ))}

        {/* Formulaire d'ajout de contact */}
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
