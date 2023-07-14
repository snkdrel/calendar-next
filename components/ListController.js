'use client';
import {v4 as uuid4} from 'uuid';
import { useState } from "react";
import Form from "./Form";

export default function ListController({ selectedDay }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [eventList, setEventList] = useState(new Array());

  function handleClickCancel () {
    setIsDialogOpened(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEventList(new Array(
      ...eventList, 
      {
        date: selectedDay,
        name: e.target.name.value,
        description: e.target.description.value,
        start: e.target.start.value,
        end: e.target.end.value,
        location: e.target.location.value
      }
    ));
    setIsDialogOpened(false);
  }
  
  return (
      <div>
      <h1>List</h1>
      <ul>
        {
          eventList
            .filter(i => i.date.getDate() === selectedDay.getDate() 
              && i.date.getMonth() === selectedDay.getMonth() 
              && i.date.getFullYear() === selectedDay.getFullYear())
            .map(i => <li key={uuid4()}>{
              i.date + i.name + i.description + i.start + i.end + i.location
              }</li>)
        }
      </ul>
      <button onClick={ () => setIsDialogOpened(true) }> + </button>
      {isDialogOpened ? <Form onClickCancel={handleClickCancel} clickSubmit={handleSubmit}/> : <></>}
      </div>
  );
}