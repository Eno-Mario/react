import React, { useEffect, useState } from 'react'

export default function useGithubUser({username}) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    function fetchData() {
      setLoading(true)

      fetch(`https://api.github.com/users/${username}`)
          .then((data) => data.json())
          .then((data) => {
            setUserData(data)
            setLoading(false)
          })
          .catch((err) => setError(err))
    }

    useEffect(() => fetchData(), [username])

  return {
    userData,
    loading,
    error,
    onFetchData: fetchData
  }
}
