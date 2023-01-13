import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { contactContext } from "../context/ContactContextProvider";

const EditContact = () => {
  const { oneContact, getOneContact, updateContact } =
    useContext(contactContext);
  const [newContact, setNewContact] = useState(oneContact);
  const params = useParams();

  useEffect(() => {
    getOneContact(params.id);
  }, []);

  function handleInput(e) {
    let newObj = { ...newContact, [e.target.name]: e.target.value };
    setNewContact(newObj);
  }
  function handleClick() {
    updateContact(newContact.id, newContact);
  }

  return (
    <div>
      <div className="inner-wrapper">
        <div className="modal-form">
          <h2>Edit contact</h2>
          <div className="modal-name">
            <input
              className="modal-input-name"
              type="text"
              placeholder="Name"
              name="name"
              value={newContact.name}
              onChange={handleInput}
            />
          </div>
          <div className="modal-genre">
            <input
              className="modal-input-genre"
              type="text"
              placeholder="Surname"
              name="surname"
              value={newContact.surname}
              onChange={handleInput}
            />
          </div>
          <div className="modal-time">
            <input
              className="modal-input-time"
              type="text"
              placeholder="Number"
              name="number"
              value={newContact.number}
              onChange={handleInput}
            />
          </div>

          <div className="modal-url">
            <input
              className="modal-input-url"
              type="text"
              placeholder="Image"
              name="image"
              value={newContact.image}
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

export default EditContact;
