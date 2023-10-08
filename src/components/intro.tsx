'use client'
import '../styles/intro.css';
import { myNetworks } from './myNetworks';
import { aboutMe } from './sobremim';

export function Intro() {
  return (
    <div className='intro'>  
      <div className='about'>
        {aboutMe}
        {myNetworks}
      </div>
        <div className='enlarge-image' title='Este sou eu no jornal local, após viajar mais de 135 mil kms de moto do Brasil ao Alasca EUA ao Ushuaia Argentina'>
          <img src="https://avatars.githubusercontent.com/u/88905222?s=400&u=2519bc0d939d3b8f1af413bc8801adf6941e172b&v=4" alt="Eu no Alasca" />
        <h6> </h6>
      </div>
    </div>
  );
}
