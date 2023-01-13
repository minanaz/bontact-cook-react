import React, { useContext, useEffect } from "react";
import { contactContext } from "../context/ContactContextProvider";

import { VscWand } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { contacts, getContacts, deleteContact } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <div className="anime-card" key={contact.id}>
          <div className="anime-card__img">
            <img src={contact.image} alt="" />
          </div>
          <div className="anime-info">
            <div className="anime-genre">
              <p>{contact.name}</p>
            </div>
            <div className="anime-name">
              <p>{contact.surname}</p>
            </div>
            <div className="anime-desc">
              <p>{contact.number}</p>
            </div>
          </div>
          <div className="admin-panel" id="admin">
            <Link to={`/details/${contact.id}`}>
              <VscWand />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
