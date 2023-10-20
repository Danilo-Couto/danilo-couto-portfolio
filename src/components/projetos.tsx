import React from 'react';
import useTranslation from '@/hooks/use-translation';
import { useDataContext } from '@/context/data_context';
import Image from 'next/image';
import { Repository, RepositoryArray } from '@/app/interfaces/Interfaces';

export function Projetos() {
  const { t } = useTranslation();
  const { repo } = useDataContext() as RepositoryArray; 

  const filteredRepo = repo.filter((r: { fork: boolean; }) => !r.fork);
  const limitedData = filteredRepo.slice(0, 4);

  function ProjectItem({ repo }: {repo: Repository}) {
    return (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h4>{repo.name.toUpperCase().split('-').join(' ')}</h4>
        </a>
        <Image
          src="/images/backend_code.png"
          alt="backend Image"
          layout="responsive"
          width={300}
          height={200}
        />
      </li>
    );
  }

  return (
    <div className="projects">
      <div className="div_box" title="Projetos">
        <h2>{t('titleProjets')}</h2>
        <ul>
          {filteredRepo.length === 0 ? (
            <div>No GitHub Repository</div>
          ) : limitedData.map((r: Repository) => (
            <ProjectItem key={r.id} repo={r} />)
          )}
        </ul>
        <a href="/projetos">
          <h4>{t('more')}</h4>
        </a>
      </div>
    </div>
  );
}
