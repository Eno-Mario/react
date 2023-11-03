import React from "react";

function Welcome ({name = "Mario", age} /* You can set a default value for the name prop */) { 
    return (
    <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <p>Your age is {age}</p>
    </div>
    )
}

export default Welcome