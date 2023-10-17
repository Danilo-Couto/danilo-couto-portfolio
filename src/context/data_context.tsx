'use client'

import { createContext, useContext, useEffect, useState } from 'react';

export const dataContext = createContext([]);
export const useDataContext = () => useContext(dataContext);

export const DataContext = ({ children }) => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const username = 'Danilo-Couto';
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error('GitHub access token not provided in environment variables.');
    }

    const fetchRepos = async (url) => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });
        const data = await response.json();
        const linkHeader = response.headers.get('Link');
        
        if (linkHeader) {
          // Parse the Link header to check for pagination links
          const linksArray = linkHeader.split(', ');
          const nextPageUrl = linksArray.find(link => link.includes('rel="next"'));
          
          if (nextPageUrl) {
            const nextUrl = nextPageUrl.match(/<([^>]*)>/)[1];
            // Fetch the next page recursively
            fetchRepos(nextUrl);
          }
        }

        setRepo(prevRepo => {
          const uniqueData = data.filter(newData => prevRepo.every(prevData => newData.id !== prevData.id));
          return [...prevRepo, ...uniqueData];
        });
      } catch (error) {
        throw new Error(`API request failed with status ${error}`);
      }
    };

    // Initial fetch
    fetchRepos(apiUrl);
  }, []);

  return (
    <dataContext.Provider value={{ repo }}>
      {children}
    </dataContext.Provider>
  );
};
