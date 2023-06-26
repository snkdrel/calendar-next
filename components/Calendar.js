import {v4 as uuid4} from 'uuid';

export default function Calendar({firstOfMonth, daysOnFirstWeek, lastDay}) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return (
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
                    [...Array(firstOfMonth.getDay())].map(() => <td key={uuid4()}></td>)
                }
                {
                    // First numbered tds
                    [...Array(daysOnFirstWeek)].map((v, i) => <td key={uuid4()}>{i+1}</td>)
                }
            </tr>
            <tr>
                {
                    // second week
                    [...Array(7)].map((v, i) => <td key={uuid4()}>{daysOnFirstWeek + 1 + i}</td>)
                }
            </tr>
            <tr>
                {
                    // third week
                    [...Array(7)].map((v, i) => <td key={uuid4()}>{daysOnFirstWeek + 8 + i}</td>)
                }
            </tr>
            <tr>
                {
                    // fourth week
                    [...Array(7)].map((v, i) => <td key={uuid4()}>{daysOnFirstWeek + 15 + i}</td>)
                }
            </tr>
            <tr>
                {
                    // fifth week
                    [...Array(7)].map((v, i) => 
                        (daysOnFirstWeek + 22 + i) <= lastDay ? <td key={uuid4()}>{daysOnFirstWeek + 22 + i}</td> : <td key={uuid4()}></td>)
                }
            </tr>
            <tr>
                {
                    // sixth week
                    [...Array(7)].map((v, i) => 
                        (daysOnFirstWeek + 29 + i) <= lastDay ? <td key={uuid4()}>{daysOnFirstWeek + 29 + i}</td> : <td key={uuid4()}></td>)
                }
            </tr>
            </tbody>
        </table>
    );
}