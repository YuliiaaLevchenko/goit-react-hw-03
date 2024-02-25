import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
