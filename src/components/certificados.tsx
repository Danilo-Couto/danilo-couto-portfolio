import React from 'react';
import useTranslation from '@/hooks/use-translation';
import { certificates } from '@/libs/certificados';
import Image from 'next/image';
import Link from 'next/link';
import { Certificate } from '@/app/interfaces/Interfaces';

function CertificateItem({ certificate }: Certificate) {
  return (
    <li>
      <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
        <h4>{certificate.title}</h4>
      </Link>
      <Image
        src={certificate.link}
        alt={certificate.altText}
        layout="responsive"
        width={300}
        height={200}
      />
    </li>
  );
}

export function Certificados() {
  const { t } = useTranslation();

  return (
    <div className="certificates">
      <div className="div_box" title="">
        <h2>{t('certificates')}</h2>
        <ul>
          {certificates.slice(-4).map((c) => (
            <CertificateItem key={c.title} certificate={c} />
          ))}
        </ul>
        <Link href="/certificados">
          <h4>{t('more')}</h4>
        </Link>
      </div>
    </div>
  );
}
