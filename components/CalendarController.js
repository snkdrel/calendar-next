import Calendar from "./Calendar";

export default function CalendarController() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months.indexOf('April');
    const year = 2017;
    const today = new Date(year, month);
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth());
    const daysOnFirstWeek = 7 - firstOfMonth.getDay();
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
    
    return (
        <div>
            <button>Prev</button>
            <button>Today</button>
            <button>Next</button>
            <Calendar firstOfMonth={firstOfMonth} daysOnFirstWeek={daysOnFirstWeek} lastDay={lastDay} />
        </div>
    );
}