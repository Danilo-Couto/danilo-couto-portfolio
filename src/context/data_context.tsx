'use client'
import { createContext, useContext, useEffect, useState } from 'react';

export const dataContext = createContext([]);

export const useDataContext=()=> useContext(dataContext);

export const DataContext = ({ children }) => {

  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const username = 'Danilo-Couto';
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error('GitHub access token not provided in environment variables.');
    }

    const fetchRepos = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });
        const data = await response.json();
        setRepo(data);
      } catch (error) {
        throw new Error(`API request failed with status ${error}`);
      }
    };
    fetchRepos();
  }, [repo]);

  
  return (
    <dataContext.Provider value={{ repo }}>
        {children}
    </dataContext.Provider>
  );
}

