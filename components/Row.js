import {v4 as uuid4} from 'uuid';

export default function Row ({size, startingDay, today, lastDay, selected}) {
    return (
        [...Array(size)].map( (v, i) => 
            ( i + startingDay ) <= lastDay ?
                <td 
                    key={ uuid4() } 
                    className={ i + startingDay === today ? 'today' : 'otherDay' }
                >
                    { i + startingDay }
                </td>
            :
                <td key={ uuid4() } ></td>
        )
    );
}