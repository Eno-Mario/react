import React, { useRef, useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [listEl, setListEl] = useState([null]);

  function handleSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      if (!listEl.includes(formData.get("username")))
        setListEl([...listEl, formData.get("username")]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <strong>Inserisci Username: </strong>
        </label>
        <input type="text" name="username" />
        <button>Cerca</button>
      </form>
      <ul>
        {listEl.map((el, index) => (
          <li key={index}>
            <GithubUser username={el} />
          </li>
        ))}
      </ul>
    </>
  );
}
