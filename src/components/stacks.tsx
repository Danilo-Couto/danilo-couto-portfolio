import '../styles/stacks.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiJest,
  SiMocha,
  SiTypescript,
  SiMysql,
  SiStyledcomponents,
  SiPython,
  SiMongodb,
  SiNextdotjs,
  SiLinux,
  SiSequelize,
  SiPrisma,
  SiGoogleappsscript,
  SiSpringboot,
  SiMongoose,
  SiJunit5
} from 'react-icons/si';
import {
  DiNodejs,
  DiDocker,
  DiHeroku,
  DiGoogleAnalytics,
  DiJava
} from 'react-icons/di';
import useTranslation from '@/hooks/use-translation';

function Stacks() {

  const {t} = useTranslation();

  return (
    <div className='div_box_right' title="Skills/ Stacks/ Frameworks">
      <h2> {t('stacks')} </h2>
      <div className="icon-container">
        <IoLogoJavascript title = 'Javascript' />
        <SiTypescript title = 'TypeScript' />
        <DiNodejs title = 'NodeJs' />
        <FaReact title = 'React' />
        <SiNextdotjs title = 'NextJs' />
        <AiFillHtml5 title = 'Html5' />
        <FaCss3Alt title = 'CSS' />
        <SiPython title = 'Python' />
        <DiJava title = 'Java' />
        <SiSpringboot title = 'Springboot'/>
        <SiJunit5 title= 'Junit5' />
        <SiMysql title = 'MySql' />
        <SiSequelize title = 'Sequelize' /> 
        <SiPrisma title = 'Primsa' /> 
        <SiMongodb title = 'MongoDB' />
        <SiMongoose title = 'Mongoose' />
        <DiDocker title = 'Docker' />
        <DiHeroku title = 'Heroku' />
        <SiStyledcomponents title = 'Styled Components' />
        <SiJest title = 'Jest' />
        <SiMocha title = 'Mocha' />
        <FaGithub title = 'GitHub' />
        <SiLinux title = 'Linux' /> 
        <DiGoogleAnalytics title = 'Google Analytics' />      
      </div>
    </div>
  );
}

export default Stacks;
