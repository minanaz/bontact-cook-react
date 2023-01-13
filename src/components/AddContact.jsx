import React, { useContext, useState } from "react";
import { contactContext } from "../context/ContactContextProvider";

const AddContact = () => {
  const { contacts, getContacts, addContact } = useContext(contactContext);

  const initialState = {
    name: "",
    surname: "",
    number: "",
    image: "",
    id: null,
  };

  const [contact, setContact] = useState(initialState);

  function handleInput(e) {
    let newObj = { ...contact, [e.target.name]: e.target.value };
    setContact(newObj);
  }

  function handleClick() {
    addContact(contact);
    setContact(initialState);
  }

  return (
    <div>
      <div className="inner-wrapper">
        <div className="modal-form">
          <h2>Add contact</h2>
          <div className="modal-name">
            <input
              className="modal-input-name"
              type="text"
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={handleInput}
            />
          </div>
          <div className="modal-genre">
            <input
              className="modal-input-genre"
              type="text"
              placeholder="Surname"
              name="surname"
              value={contact.surname}
              onChange={handleInput}
            />
          </div>
          <div className="modal-time">
            <input
              className="modal-input-time"
              type="text"
              placeholder="Number"
              name="number"
              value={contact.number}
              onChange={handleInput}
            />
          </div>

          <div className="modal-url">
            <input
              className="modal-input-url"
              type="text"
              placeholder="Image"
              name="image"
              value={contact.image}
              onChange={handleInput}
            />
          </div>
          <button className="modal-save" onClick={handleClick}>
            Add contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
