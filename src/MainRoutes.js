import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Details from "./components/Details";
import EditContact from "./components/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default MainRoutes;
