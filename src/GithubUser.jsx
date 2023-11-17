import React, { useState, useEffect } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({username}) {
  const {userData, loading, error} = useGithubUser({username: username})


/*   return (
    <>
      {loading && <h1>Loading</h1>}
      {error && <h1>We have some problems</h1>}
      {(!loading && !error) && 
        <>
            <h3>Nome: {(userData && userData.name) ? userData.name : "Non presente"}</h3>
            <h4>Login: {(userData && userData.login) ? userData.login : "Non presente"}</h4>
            {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user-avatar" />}
        </>
      }
    </>
  ) */

  //Dovrebbe funzionare in entrambi i modi ma non 
  //ho avuto modo di verificarlo perché ho raggiunto 
  //il limite di chiamate che posso fare al API di Github
  //e ho lasciato solo quello che ho testato

  if (loading) {
    return <h1>Loading</h1>
  } else {
    if (error) {
      return <h1>We have some problems</h1>
    } else {
      return (
        <>
            <h3>Nome: {(userData && userData.name) ? userData.name : "Non presente"}</h3>
            <h4>Login: {(userData && userData.login) ? userData.login : "Non presente"}</h4>
            {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user-avatar" />}
        </>
      )
    }
  }
}
