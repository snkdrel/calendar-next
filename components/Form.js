export default function Form({ onClickCancel, clickSubmit }) {
    return (
        <dialog open>
            <form onSubmit={clickSubmit}>
                <legend>Add an event</legend>

                <label htmlFor="name">Name: 
                    <input type="text" id="name" name="name"></input>
                </label>

                <label htmlFor="description">Description:
                    <input type="text" id="description" name="description"></input>
                </label>

                <label htmlFor="start">Start: 
                    <input type="time" id="start" name="start"></input>
                </label>

                <label htmlFor="end">End: 
                    <input type="time" id="end" name="end"></input>
                </label>

                <label htmlFor="location">Location: 
                    <input type="text" id="locacion" name="location"></input>
                </label>

                <div className="flex place-content-center space-x-15">
                    <button type="submit" className="rounded-full bg-cyan-400 px-3 py-1 m-2 place-content-center">Accept</button>
                    <button type="button" onClick={onClickCancel} className="rounded-full bg-cyan-400 px-3 py-1 m-2 place-content-center">Cancel</button>
                </div>
            </form>
        </dialog>
    );
}