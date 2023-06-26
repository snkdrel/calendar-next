'use client';

import Calendar from "./Calendar";
import { useState } from "react";

export default function CalendarController() {
    //const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    //                'July', 'August', 'September', 'October', 'November', 'December'];
    //const month = months.indexOf('April');
    //const year = 2017;
    const [currentDate, setCurrentDate] = useState(new Date()); // today
    //const today = new Date(year, month);
    const firstOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth());
    const daysOnFirstWeek = 7 - firstOfMonth.getDay();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    let lastDay;
    
    if(month === 0 || month === 2 || month === 4 || month === 0 || month === 6 || month === 7 || month === 9 || month === 11) {
        lastDay = 31;
    } else if( month === 1) {
        // check for leap years
        if(year % 400 === 0 || (year % 100 !== 0) && (year % 4 === 0)) {
            lastDay = 29;
        } else {
            lastDay = 28;
        }
    } else {
        lastDay = 30;
    }

    function handlePrevClick() {
        // if it's January, change year also
        if(month === 0) {
            setCurrentDate( new Date(year - 1, 11) );
        } else {
            // only change month
            setCurrentDate( new Date(year, month - 1) );
        }
    }

    function handleNextClick() {
        // if it's december, change year also
        if(month === 11) {
            setCurrentDate( new Date(year + 1, 0) );
        } else {
            // only change month
            setCurrentDate( new Date(year, month + 1) );
        }
    }

    function handleTodayClick() {
        setCurrentDate( new Date() );
    }
    
    return (
        <div>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleTodayClick}>Today</button>
            <button onClick={handleNextClick}>Next</button>
            <Calendar firstOfMonth={firstOfMonth} daysOnFirstWeek={daysOnFirstWeek} lastDay={lastDay} />
        </div>
    );
}