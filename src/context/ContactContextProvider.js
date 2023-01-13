import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const contactContext = createContext();

const ContactContextProvider = ({ children }) => {
  let API = " http://localhost:8080/contacts";
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState({});
  const navigate = useNavigate();

  async function getContacts() {
    let { data } = await axios(API);
    setContacts(data);
  }

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
    navigate("/");
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
    navigate("/");
  }

  async function updateContact(id, newContact) {
    await axios.patch(`${API}/${id}`, newContact);
    getContacts();
    navigate("/");
  }

  async function getOneContact(id) {
    let oneContact = await axios(`${API}/${id}`);
    setOneContact(oneContact.data);
  }

  let value = {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    getOneContact,
    oneContact,
    updateContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
