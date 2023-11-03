import React from "react";
import Age from "./Age";

function Welcome ({name = "Mario", age} /* You can set a default value for the name prop */) { 
    return (
    <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <Age age={age} />
    </div>
    )
}

export default Welcome