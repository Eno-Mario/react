import React from "react";
import Age from "./Age";

function Welcome ({name = "Mario", age} /* You can set a default value for the name prop */) { 
    return (
    <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        {age > 18 && <Age age={age} />} {/* - The Age component is rendered only if the age prop is greater than 18. */}
        {age && <Age age={age} />} {/* - The Age component is rendered only if the age prop is present.  */}
        {age > 18 && age < 65 && <Age age={age} />} {/* - The Age component is rendered only if the age prop is greater than 18 and less than 65.  */}
        {age > 18 && name === "John" && <Age age={age} />} {/* - The Age component is rendered only if the age prop is greater than 18 and the name prop is equal to "John". */}
        {<Age age={age} />}
    </div>
    )
}

export default Welcome