function MouseClicker({name="one"}) {
    function handleButtonEvent(event) {
        if (event.target.name) console.log(event.target.name)
        else if (event.target.src) console.log(event.target.src)
    }

    return <button name={name} onClick={handleButtonEvent}><img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" width="24px" alt="" />Clicker</button>
}

export default MouseClicker