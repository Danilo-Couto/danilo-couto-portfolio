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
import '../styles/stacks.css'

function Stacks() {
  return (
    <div className='stacks' title="Skills/ Conhecimentos/ Stacks/ Tecnologias">
      <h2>
        Tecnologias/ Linguagens
      </h2>
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
