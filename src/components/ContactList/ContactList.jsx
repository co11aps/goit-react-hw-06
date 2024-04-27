import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter).toLowerCase() || "";

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.card} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
