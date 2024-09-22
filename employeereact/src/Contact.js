import axios from 'axios';
import React, { Component } from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [] // Initialisation correcte de l'état "contact"
        };
    }

    componentDidMount() {
        // Correction : accès à "response.data" pour récupérer les données de l'API
        axios.get('http://localhost:3100/contact/getall')
            .then((response) => {
                // S'assurer que les données sont bien dans "response.data"
                this.setState({ contact: response.data });
            })
            .catch((error) => console.error(error)); // Gestion des erreurs
    }

    render() {
        return (
            <div>
                {this.state.contact.map((item, key) => (
                    <ul key={key}>
                        <li>{item.name}</li>
                        <li>{item.lastname}</li>
                        <li>{item.numtelephone}</li>
                    </ul>
                ))}
            </div>
        );
    }
}

export default Contact;
