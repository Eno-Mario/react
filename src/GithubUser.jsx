import React, { useState, useEffect } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({username}) {
  const {userData} = useGithubUser({username: username})

  return (
    <>
        <h3>Nome: {(userData && userData.name) ? userData.name : "Non presente"}</h3>
        <h4>Login: {(userData && userData.login) ? userData.login : "Non presente"}</h4>
        {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user-avatar" />}
    </>
  )
}
