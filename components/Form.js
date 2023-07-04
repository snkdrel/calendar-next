export default function Form() {
    return (
        <dialog open>
            <form action="#" method="dialog">
                <legend>Add an event</legend>

                <label for="name">Name: </label>
                <input type="text" id="name" name="name"></input>

                <label for="description">Description: </label>
                <input type="text" id="description" name="description"></input>

                <label for="start">Start: </label>
                <input type="time" id="start" name="start"></input>

                <label for="end">End: </label>
                <input type="time" id="end" name="end"></input>

                <label for="location">Location: </label>
                <input type="text" id="locacion" name="location"></input>

                <button type="button">Cancel</button>
                <button type="submit">Accept</button>
            </form>
        </dialog>
    );
}