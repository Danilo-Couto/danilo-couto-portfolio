'use client'

import React from 'react';
import { Networks } from './networks';
import useTranslation from '@/hooks/use-translation';
import Image from 'next/image';
import '../styles/intro.css';

export function Intro() {

  const {t} = useTranslation();

  return (
    <div className='intro'>  
      <h2> {t('introTitle')}: Java, TypeScript, JavaScript, Python</h2>
      <div className='intro-box'>
        <p dangerouslySetInnerHTML={{ __html: t('introDescription') }} />    
        <div className='intro-img'>
          <Image
            src="https://avatars.githubusercontent.com/u/88905222?s=400&u=2519bc0d939d3b8f1af413bc8801adf6941e172b&v=4"
            alt="Eu em viagem ao Alasca de moto"
            layout="responsive"
            width={300}
            height={200}
            />
        </div>
      </div>
      <Networks />
    </div>
  );
}
