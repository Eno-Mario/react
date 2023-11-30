import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((resp) => resp.json());

export default function useGithubUser({ username }) {
  if (!username) {
    return {
      userData: null,
      loading: false,
      error: new Error(),
      onFetchData: () => {},
    };
  }

  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    userData: data,
    loading: !data && !error,
    error,
    onFetchData: mutate,
  };
}
