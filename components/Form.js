export default function Form({ onClickCancel, clickSubmit }) {
    return (
        <dialog open>
            <form onSubmit={clickSubmit}>
                <legend>Add an event</legend>

                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name"></input>

                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description"></input>

                <label htmlFor="start">Start: </label>
                <input type="time" id="start" name="start"></input>

                <label htmlFor="end">End: </label>
                <input type="time" id="end" name="end"></input>

                <label htmlFor="location">Location: </label>
                <input type="text" id="locacion" name="location"></input>

                <button type="button" onClick={onClickCancel}>Cancel</button>
                <button type="submit">Accept</button>
            </form>
        </dialog>
    );
}