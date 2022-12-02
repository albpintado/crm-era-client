import { ContactModel } from "./ContactModel";
import "./ContactList.css";
import { useState } from "react";

type ContactProps = {
  contact: ContactModel;
  setSelectedContact: (contact: ContactModel) => void;
};

const Contact = ({ contact, setSelectedContact }: ContactProps) => {
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
    setSelectedContact(contact);
  };

  return (
    <article
      key={contact.id}
      className={classes}
      aria-label="contact-card"
      onClick={classesHandler}
    >
      <div className="contact-card_method">{contactMethodIcon(contact)}</div>
      <p>{new Date(contact.date).toLocaleDateString()}</p>
      <p className="contact-card_name">{contact.name}</p>
    </article>
  );
};

export default Contact;
