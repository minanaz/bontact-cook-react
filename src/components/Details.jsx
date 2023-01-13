import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { contactContext } from "../context/ContactContextProvider";

const Details = () => {
  const { oneContact, getOneContact, deleteContact } =
    useContext(contactContext);
  const params = useParams();

  useEffect(() => {
    getOneContact(params.id);
  }, []);

  return (
    <div>
      <div className="anime-card" key={oneContact.id}>
        <div className="anime-card__img">
          <img src={oneContact.image} alt="" />
        </div>
        <div className="anime-info">
          <div className="anime-genre">
            <p>{oneContact.name}</p>
          </div>
          <div className="anime-name">
            <p>{oneContact.surname}</p>
          </div>
          <div className="anime-desc">
            <p>{oneContact.number}</p>
          </div>
        </div>
        <div className="admin-panel" id="admin">
          <MdDeleteOutline
            onClick={() => deleteContact(oneContact.id)}
            fontSize={"30px"}
          />
          <Link to={`/edit/${oneContact.id}`}>
            <FiEdit2 fontSize={"30px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
