import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './form/ContactForm';
import Filter from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
import { Container } from './app.style';

const contactsDefault = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // ? отримання контактів з локал-сторидж якщо вони є
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts && parsedContacts.length) {
      this.setState({ contacts: parsedContacts });
    } else this.setState({ contacts: contactsDefault });
  }

  // ? записування контактів в локал-сторидж (завжди робити порівняння на попередній стан)
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const newContact = { id: nanoid(), ...data };
    this.checkContact(newContact)
      ? alert(newContact.name + ' is already in contacts!')
      : this.setState(prevValue => ({
          contacts: [...prevValue.contacts, newContact],
        }));
  };

  checkContact = newContact => {
    const normalizeContact = newContact.name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizeContact
    );
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContacts = id => {
    this.setState(prevValue => ({
      contacts: prevValue.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={filtredContacts}
          onDeleteContacts={this.deleteContacts}
        ></ContactList>
      </Container>
    );
  }
}
