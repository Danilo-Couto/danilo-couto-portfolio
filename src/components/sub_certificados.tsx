import React from 'react';
import useTranslation from '@/hooks/use-translation';
import Image from 'next/image';
import Link from 'next/link';
import { certificates } from '@/libs/certificados';
import { Certificate } from '@/app/interfaces/Interfaces';


function CertificateItem({certificate}: Certificate) {
  return (
    <li>
      <Link href= {certificate.link}
        target="_blank" 
        rel="noopener noreferrer">
        <h4>{certificate.title}</h4>
      </Link>
      <Image
        src={certificate.link}
        alt={certificate.altText}
        layout="responsive"
        width={400}
        height={300}
        />
        <h6>{certificate.stacks}</h6>
    </li>
  );
}

export function SubCertificados() {
  const { t } = useTranslation();

  return (
    <div className='sub-certificados'>
      <h3>{t('certificates')}</h3>
      <ul>
        {certificates.map((c) => (
          <CertificateItem key={c.title} certificate={c} />
        ))}
      </ul>
    </div>
  );
}
