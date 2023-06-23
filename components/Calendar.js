export default function Calendar() {
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
            <table>
                <caption>{ months[firstOfMonth.getMonth()] }</caption>
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
                <tr>
                    {
                        // empty initial tds before first of month
                        [...Array(firstOfMonth.getDay())].map(() => <td></td>)
                    }
                    {
                        // First numbered tds
                        [...Array(daysOnFirstWeek)].map((v, i) => <td>{i+1}</td>)
                    }
                </tr>
                <tr>
                    {
                        // second week
                        [...Array(7)].map((v, i) => <td>{daysOnFirstWeek + 1 + i}</td>)
                    }
                </tr>
                <tr>
                    {
                        // third week
                        [...Array(7)].map((v, i) => <td>{daysOnFirstWeek + 8 + i}</td>)
                    }
                </tr>
                <tr>
                    {
                        // fourth week
                        [...Array(7)].map((v, i) => <td>{daysOnFirstWeek + 15 + i}</td>)
                    }
                </tr>
                <tr>
                    {
                        // fifth week
                        [...Array(7)].map((v, i) => 
                            (daysOnFirstWeek + 22 + i) <= lastDay ? <td>{daysOnFirstWeek + 22 + i}</td> : <td></td>)
                    }
                </tr>
                <tr>
                    {
                        // sixth week
                        [...Array(7)].map((v, i) => 
                            (daysOnFirstWeek + 29 + i) <= lastDay ? <td>{daysOnFirstWeek + 29 + i}</td> : <td></td>)
                    }
                </tr>
                </tbody>
            </table>
        </div>
    );
}