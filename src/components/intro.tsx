'use client'
import '../styles/intro.css';
import { MyNetworks } from './my_networks';
import { AboutMe } from './aboutMe';
import useTranslation from '@/hooks/use-translation';

export function Intro() {

  const {t} = useTranslation();

  return (
    <div className='intro'>  
      <div className='div_box_left'>
        <AboutMe />
        <MyNetworks />
      </div>
      <div title={t('introAltText')}>
          <img src="https://avatars.githubusercontent.com/u/88905222?s=400&u=2519bc0d939d3b8f1af413bc8801adf6941e172b&v=4" alt="Eu no Alasca" />
        <h6> </h6>
      </div>

    </div>
  );
}
