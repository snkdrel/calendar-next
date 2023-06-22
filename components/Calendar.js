export default function Calendar() {
    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'Dicember'];
    
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
                        [...Array(7 - firstOfMonth.getDay())].map((v, i) => <td>{i+1}</td>)
                    }
                </tr>
                <tr>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                </tr>
                <tr>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                </tr>
                <tr>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                </tr>
                <tr>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                </tr>
                <tr>
                    <th>30</th>
                    <th>31</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}