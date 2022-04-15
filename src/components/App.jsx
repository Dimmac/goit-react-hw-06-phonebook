import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.global.styled';
import { TitlePhoneBook, TitleContacts, Section } from './App.styled';

export default function App() {
  return (
    <Container>
      <Section>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm></ContactForm>
      </Section>

      <Section>
        <TitleContacts>Contacts</TitleContacts>

        <Filter></Filter>

        <ContactList></ContactList>
      </Section>
    </Container>
  );
}
