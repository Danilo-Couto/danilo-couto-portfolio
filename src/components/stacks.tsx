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
  SiGithub,
  SiLinux,
  SiSequelize,
  SiPrisma,
  SiRedux
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
        <FaReact />
        <FaGithub />
        <SiLinux /> 
        <SiGithub /> 
        <AiFillHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaReact />
        <SiRedux /> 
        <SiStyledcomponents />
        <SiJest />
        <SiMocha />
        <DiNodejs />
        <SiSequelize /> 
        <SiPrisma /> 
        <SiTypescript />
        <SiMysql />
        <SiMongodb />
        <DiDocker />
        <DiHeroku />
        <SiNextdotjs />
        <SiPython />
        <DiJava />
        <DiGoogleAnalytics />      
      </div>
    </div>
  );
}

export default Stacks;
