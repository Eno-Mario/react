import React, { useState, useEffect } from 'react'

export default function GithubUser({username}) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((data) => data.json())
            .then((data) => setUserData(data))
            .catch((err) => console.log(err))
    }, [username])

  return (
    <>
        <h3>Nome: {(userData && userData.name) ? userData.name : "Non presente"}</h3>
        <h4>Login: {(userData && userData.login) ? userData.login : "Non presente"}</h4>
        {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user-avatar" />}
    </>
  )
}
