import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };


  addContact = (newContact) => {
     const arrayOfContactsName = [];

    for (const contact of this.state.contacts) {
      arrayOfContactsName.push(contact.name);
    }

    if (arrayOfContactsName.includes(newContact.name)) {
     alert (`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  };

  addNameFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = (name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }
    ));
  };


  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredComponents = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    
    return (
      <div>
         <GlobalStyle />
         <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.addNameFilter} />
        {filtredComponents.length > 0 && <ContactList items={filtredComponents} onDelete={this.deleteContact} />}
      </div>
    );
  }
};
