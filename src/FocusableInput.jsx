import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function () {

    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus()
    }, [])

  return (
    <input ref={ref} type="text" />
  )
}
