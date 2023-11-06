function MouseClicker({name="one"}) {
    function handleButtonEvent(event) {
        console.log(event.target.name)
    }

    return <button name={name} onClick={handleButtonEvent}>Clicker</button>
}

export default MouseClicker