import React from 'react';
import useTranslation from '@/hooks/use-translation';
import { useDataContext } from '@/context/data_context';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  html_url: string;
  fork: boolean;
}

export function Projetos() {
  const { t } = useTranslation();
  const { repo } = useDataContext() as unknown as Project[];

  const filteredRepo = repo.filter((r) => !r.fork);
  const limitedData = filteredRepo.slice(0, 4);

  function ProjectItem({ repo }: { repo: Project }) {
    return (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h4>{repo.name.toUpperCase().split('-').join(' ')}</h4>
        </a>
        <Image
          src="/images/backend_code.png"
          alt="backend Image"
          width={250}
          height={150}
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
          ) : limitedData.map((r) => (
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
