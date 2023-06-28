import {v4 as uuid4} from 'uuid';
import Row from './Row.js';

export default function Calendar({firstOfMonth, daysOnFirstWeek, lastDay, today, selected, handleClickOnCell, currentDate}) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
        <table>
            <caption>{ months[firstOfMonth.getMonth()] + ' ' + firstOfMonth.getFullYear()}</caption>
            <thead>
            <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
            </tr>
            </thead>
            <tbody>
            {/* First Week */}
            <tr>
                {
                    // empty initial tds before first of month
                    [...Array(firstOfMonth.getDay())].map(() => <td key={uuid4()}></td>)
                }
                <Row 
                    size={daysOnFirstWeek} 
                    startingDay={1} 
                    today={today} 
                    lastDay={lastDay} 
                    selected={selected} 
                    handleClickOnCell={handleClickOnCell} 
                    currentDate={currentDate} />
            </tr>
            {/* Second Week */}
            <tr>
                <Row 
                    size={7}
                    startingDay={daysOnFirstWeek + 1}
                    today={today} 
                    lastDay={lastDay}
                    selected={selected}
                    handleClickOnCell={handleClickOnCell}
                    currentDate={currentDate} />
            </tr>
            {/* Third Week */}
            <tr>
                <Row 
                    size={7}
                    startingDay={daysOnFirstWeek + 8}
                    today={today} 
                    lastDay={lastDay}
                    selected={selected}
                    handleClickOnCell={handleClickOnCell}
                    currentDate={currentDate} />
            </tr>
            {/* Fourth Week */}
            <tr>
                <Row 
                    size={7}
                    startingDay={daysOnFirstWeek + 15}
                    today={today} 
                    lastDay={lastDay}
                    selected={selected}
                    handleClickOnCell={handleClickOnCell}
                    currentDate={currentDate} />
            </tr>
            {/* Fifth Week */}
            <tr>
                <Row 
                    size={7}
                    startingDay={daysOnFirstWeek + 22}
                    today={today} 
                    lastDay={lastDay}
                    selected={selected}
                    handleClickOnCell={handleClickOnCell}
                    currentDate={currentDate} />
            </tr>
            {/* Sixth Week */}
            <tr>
                <Row 
                    size={7}
                    startingDay={daysOnFirstWeek + 29}
                    today={today} 
                    lastDay={lastDay}
                    selected={selected}
                    handleClickOnCell={handleClickOnCell}
                    currentDate={currentDate} />
            </tr>
            </tbody>
        </table>
    );
}