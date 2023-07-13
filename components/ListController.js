'use client';
import { useState } from "react";
import Form from "./Form";

export default function ListController({ clickSubmit }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  function handleClickCancel () {
    setIsDialogOpened(false);
  }

  function handleSubmit() {
    setIsDialogOpened(false);
  }

  return (
      <div>
      <h1>List</h1>
      <ul>
        <li>Go to library.</li>
        <li>Dinner with Bob.</li>
      </ul>
      <button onClick={ () => setIsDialogOpened(true) }> + </button>
      {isDialogOpened ? <Form onClickCancel={handleClickCancel} clickSubmit={handleSubmit}/> : <></>}
      </div>
  );
}