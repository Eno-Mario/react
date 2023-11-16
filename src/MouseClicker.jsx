function MouseClicker({name="one"}) {
    function handleButtonEvent(event) {
        console.log(event.target.name)
    }

    function handleImgEvent(event) {
        console.log(event.currentTarget.src)
    }

    return <button name={name} onClick={handleButtonEvent}><img onClick={handleImgEvent} src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" width="24px" alt="" />Clicker</button>
}

export default MouseClicker