import {v4 as uuid4} from 'uuid';

export default function Row ({size, startingDay, today, lastDay, selected, handleClickOnCell, currentDate}) {
    return (
        [...Array(size)].map( (v, i) => 
            ( i + startingDay ) <= lastDay ?
                <td 
                    key={ uuid4() } 
                    className={ (i + startingDay === today ? 'today' : 'otherDay') +
                        ( (i + startingDay === selected.getDate()) && 
                        (selected.getMonth() === currentDate.getMonth()) && 
                        (selected.getYear() === currentDate.getYear()) ? ' selected' : '')
                    }
                    onClick={ () => handleClickOnCell(i + startingDay) }
                >
                    { i + startingDay }
                </td>
            :
                <td key={ uuid4() } ></td>
        )
    );
}