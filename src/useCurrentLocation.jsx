import React, { useEffect, useState } from 'react'

export default function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            navigator.geolocation.getCurrentPosition((position) => {
            setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
            })
        } catch (err) {
            setError(err)
        }
    } , [])

    return {
        location,
        error,
        onLocation: setLocation}
}
