'use client'

import { Repository, RepositoryArray } from '@/app/interfaces/Interfaces';
import React, { ReactNode, useEffect, useState, createContext, useContext } from 'react';

export const dataContext = createContext<RepositoryArray| undefined>(undefined);

export const DataContextProvider = ({ children } : {children: ReactNode}) => {
  const [repo, setRepo] = useState<Repository[]>([]);

  useEffect(() => {
    const username = 'Danilo-Couto';
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error('GitHub access token not provided in environment variables.');
    }

    const fetchRepos = async (url: RequestInfo | URL) => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });
        const data = await response.json();
        const filteredRepo = data.filter((r: { fork: boolean; stargazers_count : number}) => !r.fork && r.stargazers_count > 0 );

        const linkHeader = response.headers.get('Link');
        
        if (linkHeader) {
          const linksArray = linkHeader.split(', ');
          const nextPageUrl = linksArray.find(link => link.includes('rel="next"'));
          
          if (nextPageUrl) {
            const nextUrl = nextPageUrl.match(/<([^>]*)>/);
            if (nextUrl) {
              const nextPage = nextUrl[1];
              fetchRepos(nextPage);
            }
          }
        }

        setRepo(prevRepo => {
          const uniqueData = filteredRepo.filter((newData: { id: string; }) => prevRepo.every(prevData => newData.id !== prevData.id));
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

export const useDataContext = () => useContext(dataContext);
