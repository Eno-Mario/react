import React, { useRef, useState } from 'react'
import classes from "./container.module.css"

export default function Container({children, title}) {
    const [show, setShow] = useState(true)

  return (
    <div className={classes.container}>
        <h3 onClick={() => setShow(!show)}>{title}</h3>
        {show && <div>{children}</div>}
    </div>
  )
}
