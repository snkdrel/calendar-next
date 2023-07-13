'use client';
import { useState } from "react";
import Form from "./Form";

export default function ListController({ selectedDay }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  function handleClickCancel () {
    setIsDialogOpened(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted: ');
    console.log(selectedDay);
    console.log(e.target.name.value);
    console.log(e.target.description.value);
    console.log(e.target.start.value);
    console.log(e.target.end.value);
    console.log(e.target.location.value);
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