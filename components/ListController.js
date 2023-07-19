'use client';
import {v4 as uuid4} from 'uuid';
import { useState, useEffect } from "react";
import Form from "./Form";

export default function ListController({ selectedDay }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [eventList, setEventList] = useState(new Array());

  // localStorage can't be accessed in server, so we wait on mount
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('eventList'));
    if(savedList !== null) {
      setEventList(savedList);
    }
  }, []);

  function handleClickCancel () {
    setIsDialogOpened(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newEventList = new Array(
      ...eventList, 
      {
        day: selectedDay.getDate(),
        month: selectedDay.getMonth(),
        year: selectedDay.getFullYear(),
        name: e.target.name.value,
        description: e.target.description.value,
        start: e.target.start.value,
        end: e.target.end.value,
        location: e.target.location.value
      }
    );
    setEventList(newEventList);
    localStorage.setItem('eventList', JSON.stringify(newEventList));
    setIsDialogOpened(false);
  }
  
  return (
      <div className='w-1/2 m-10'>
        <h1>List</h1>
        <ul>
          {
            eventList
              .filter(i => i.day === selectedDay.getDate() 
                && i.month === selectedDay.getMonth() 
                && i.year === selectedDay.getFullYear())
              .map(i => <li key={uuid4()}>{
                i.day + '/' + (i.month + 1) + '/' + i.year + ': ' + i.name + ' - ' + i.description + '. From ' + i.start + ' to ' + i.end + ' in ' + i.location
                }</li>)
          }
        </ul>
        <button onClick={ () => setIsDialogOpened(true) }> Add event </button>
        {isDialogOpened ? <Form onClickCancel={handleClickCancel} clickSubmit={handleSubmit}/> : <></>}
      </div>
  );
}