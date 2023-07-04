'use client';

import Form from "./Form";

export default function ListController() {
    return (
        <div>
        <h1>List</h1>
        <ul>
          <li>Go to library.</li>
          <li>Dinner with Bob.</li>
        </ul>
        <button onClick={() => console.log('clicked!')}>+</button>
        <Form />
        </div>
    );
}