import React from 'react';
import { useDataContext } from '@/context/data_context';
import useTranslation from '@/hooks/use-translation';
import Image from 'next/image';
import '../styles/sub_projects.css';

interface Props {
  repo: {
    id: string,
    html_url: string,
    name: string,
    language :string,
    description :string,
  }
}

function ProjectItem({ repo} : Props) {
  return (
    <li key={repo.id}>
      <a href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer">
        <h4>{repo.name.toUpperCase().split('-').join(' ')}</h4>
      </a>
      <h5>{repo.language}</h5>
      <Image
        src="/images/backend_code.png"
        alt="backend Image"
        layout="responsive"
        width={500}
        height={300}
      />
      <p>{repo.description}</p>
    </li>
  );
}

export function SubProjects() {
  const { t } = useTranslation();
  const { repo } = useDataContext();

  const filteredRepo = repo.filter((r) => !r.fork);

  return (
    <div className='sub-projects'>
      <h3>{`${repo.length} ${t('titleProjets')}`}</h3>
      {filteredRepo.length === 0 ? (
        <div>GitHub Repository</div>
      ) : (
        <ul>
          {filteredRepo.map((r) => (
            <ProjectItem key={r.id} repo={r} />
          ))}
        </ul>
      )}
    </div>
  );
}
