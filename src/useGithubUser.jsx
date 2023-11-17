import React, { useEffect, useState } from 'react'

export default function useGithubUser({username}) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((data) => data.json())
            .then((data) => setUserData(data))
            .catch((err) => console.log(err))
    }, [username])

  return {userData}
}
