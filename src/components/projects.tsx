import { useEffect, useState } from "react";
import '../styles/projects.css'

export function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
      const username = 'Danilo-Couto';
      const apiUrl = `https://api.github.com/users/${username}/repos`;
      const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

      if (!accessToken) {
        throw new Error('GitHub access token not provided in environment variables.');
      }
      
      fetch(apiUrl, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((starredRepos) => {
          setRepos(starredRepos);
        })
        .catch((error) => {
          console.error('API request failed:', error);
        });
      },[]);


    const filteredRepoByStarred = repos.filter((r) => r.stargazers_count > 0 );

    const gitRepo = filteredRepoByStarred.map((r) => (

      <li key={r.id}>
        <a href={r.html_url} target="_blank" rel="noopener noreferrer">
          {r.name.toLowerCase()}
        </a>
      </li>
    ))

  return (
    <div className="projects" title="Projetos">
      <h2>Meus Projetos</h2>

      <ul>
        {!gitRepo ? <div>Github Repository</div> : gitRepo}
        <>
          <a href = "/projetos" >
              -> ver mais projetos
          </a>
        </>
      </ul>

    </div>
  );
}
