import React from "react";

function Welcome ({name = "Mario"} /* You can set a default value for the name prop */) { 
    return <p>Welcome, {name}!</p>
}

export default Welcome