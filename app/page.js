'use client';
import CalendarController from '@/components/CalendarController';
import ListController from '@/components/ListController';
import { useState } from 'react';

export default function Home() {

  const [selectedDay, setSelectedDay] = useState( new Date() );

  function handleClickOnCell(date) {
    setSelectedDay( date );
  }
  
  return (
    <main className='w-full flex'>
      <CalendarController onClickCell={handleClickOnCell} selectedDay={selectedDay}/>
      <ListController selectedDay={selectedDay}/>
    </main>
  )
}
