import React from 'react';
import { useDataContext } from '@/context/data_context';
import useTranslation from '@/hooks/use-translation';
import Image from 'next/image';
import '../styles/sub_projects.css';
import { Repository, RepositoryArray } from '@/app/interfaces/Interfaces';


function ProjectItem({ repo }: {repo: Repository}) {
  return (
    <li key={repo.id}>
      <a href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer">
        <h4>{repo.name.toUpperCase().split('-').join(' ')}</h4>
      </a>
      <div className="topics" >
      {repo.topics.slice(0,5).map((t) => (
          <h5 key={t}>{t.toUpperCase()}</h5>
        ))}
      </div>

      <Image
        src="/images/github-mark/github-mark.png"
        alt="backend Image"
        layout="responsive"
        width={200}
        height={150}
      />

      <p>{repo.description}</p>
    </li>
  );
}

export function SubProjects() {
  const { t } = useTranslation();
  const { repo } = useDataContext() as RepositoryArray; 

  return (
    <div className='sub-projects'>
      <h3>{`${repo.length} ${t('titleProjets')}`}</h3>

      {repo.length === 0 ? (
        <div>GitHub Repository</div>
      ) : (
        <ul>
          {repo.map((r) => (
            <ProjectItem key={r.id} repo={r} />
          ))}
        </ul>
      )}

    </div>
  );
}
