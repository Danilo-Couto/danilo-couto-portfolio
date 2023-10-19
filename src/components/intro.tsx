'use client'

import React from 'react';
import '../styles/intro.css';
import { Networks } from './networks';
import { AboutMe } from './about_me';
import useTranslation from '@/hooks/use-translation';
import Image from 'next/image';

export function Intro() {

  const {t} = useTranslation();

  return (
    <div className='intro'>  
      <div className='div_box_left'>
        <AboutMe />
        <Networks />
      </div>
      <div title={t('introAltText')}>
      <Image
        src="https://avatars.githubusercontent.com/u/88905222?s=400&u=2519bc0d939d3b8f1af413bc8801adf6941e172b&v=4"
        alt="Eu em viagem ao Alasca de moto"
        layout="responsive"
        width={500}
        height={400}
      />
      </div>
    </div>
  );
}
