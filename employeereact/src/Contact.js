import axios from 'axios';
import React, { Component } from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    contacts: [],
    contact: {
      name: '',
      lastname: '',
      numtelephone: '',
      email: '',
      contact: '',
    },
    editingContactId: null, // State to track which contact is being edited
  };

  componentDidMount() {
    // Fetch contacts when the component mounts
    this.fetchContacts(); 
    this.fetchusercount();
  }
fetchusercount=()=>{
  axios.get('http://localhost:3100/utilisateur/count').then((response)=>{
    this.setState({usercount:response.data.count});
  }).catch((error)=>console.error(error));
}
  fetchContacts = () => {
    axios.get('http://localhost:3100/contact/getall')
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => console.error(error));
  }

  // Method to delete a contact
  handleDelete = (id) => {
    // Confirm deletion action
    if (window.confirm('Are you sure you want to delete this contact?')) {
      axios.delete(`http://localhost:3100/contact/delete/${id}`)
        .then((response) => {
          console.log('Contact deleted:', response.data);
          this.setState({
            contacts: this.state.contacts.filter(contact => contact._id !== id)
          });
        })
        .catch((error) => console.error(error));
    }
  };

  // Method to handle updating a contact
  handleUpdate = (id) => {
    const contactToUpdate = this.state.contacts.find(contact => contact._id === id);
    if (contactToUpdate) {
      this.setState({
        contact: { ...contactToUpdate },
        editingContactId: id, // Set the ID of the contact being edited
      });
    }
  };

  // Method to submit the contact form
  handleSubmit = async (e) => {
    e.preventDefault();

    const { editingContactId } = this.state;

    if (editingContactId) {
      // Update the contact
      await axios.put(`http://localhost:3100/contact/update/${editingContactId}`, this.state.contact)
        .then((response) => {
          console.log(response.data);
          this.fetchContacts(); // Refresh contacts after update
          this.setState({ editingContactId: null, contact: { name: '', lastname: '', numtelephone: '', email: '', contact: '' } }); // Reset form
        });
    } else {
      // Add a new contact
      await axios.post('http://localhost:3100/contact/addcontact', this.state.contact)
        .then((response) => console.log(response.data));
      this.fetchContacts(); // Refresh contacts after adding
    }
  };

  // Unified input change handler
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ contact: { ...this.state.contact, [name]: value } });
  };

  render() {
    return (
      <div>
        {/* Form for adding/updating contact */}
        <h2>Total Contacts :{this.state.usercount}</h2>
        <h3>{this.state.editingContactId ? 'Edit Contact' : 'Add Contact'}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.contact.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Lastname:
            <input type="text" name="lastname" value={this.state.contact.lastname} onChange={this.handleInputChange} />
          </label>
          <label>
            Phone Number:
            <input type="number" name="numtelephone" value={this.state.contact.numtelephone} onChange={this.handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.contact.email} onChange={this.handleInputChange} />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" value={this.state.contact.contact} onChange={this.handleInputChange} />
          </label>
          <button type="submit">{this.state.editingContactId ? 'Update' : 'Send'}</button>
        </form>

        {/* Table for displaying contacts */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.numtelephone}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <button onClick={() => this.handleDelete(item._id)}>Delete</button>
                  <button onClick={() => this.handleUpdate(item._id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
    );
  }
}

export default Contact;
