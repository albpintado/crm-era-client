import { ContactModel } from "./ContactModel";
import "./ContactList.css";
import { useState } from "react";
import Contact from "./Contact";

type ContactListProps = {
  contacts: ContactModel[];
  setSelectedContact: (contact: ContactModel) => void;
};

const ContactList = ({ contacts, setSelectedContact }: ContactListProps) => {
  const [classes, setClasses] = useState<string>("contact-card");

  const contactMethodIcon = (contact: ContactModel): JSX.Element => {
    let contactMethodIcon;
    if (contact.method == "EMAIL") {
      contactMethodIcon = (
        <span className="material-symbols-outlined">Call</span>
      );
    } else if (contact.method == "PHONE") {
      contactMethodIcon = (
        <span className="material-symbols-outlined">Mail</span>
      );
    } else {
      contactMethodIcon = (
        <span className="material-symbols-outlined">person</span>
      );
    }
    return contactMethodIcon;
  };

  const classesHandler = () => {
    setClasses(classes.concat(" contact-card-selected"));
  };

  return (
    <section className="contact-container">
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            setSelectedContact={setSelectedContact}
          />
        );
      })}
    </section>
  );
};

export default ContactList;
