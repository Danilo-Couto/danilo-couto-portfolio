import '../styles/sub_me.css';
import React from 'react';
import Link from 'next/link';
import userData from '@/libs/my_history';
import { useThemeContext } from '@/context/theme_context';

function MyHistoryItem({myself}) {
  
  console.log(useThemeContext());
  
  return (
    <li className='li-container'>
      <div className='li-content'>
        <span className="circle" />
        <p>{myself.year}</p>
        <h3>{myself.title}</h3>
        <h4>{myself.company}</h4>
        <p >{myself.desc}</p>
        {myself.link ? (
        <Link href= {myself.link}
          target="_blank" 
          rel="noopener noreferrer">
        <h5>Link</h5>
        </Link>)
        : null
        }
      </div>
    </li>
  );
}

export function SubMe() {
  return (
    <div>
      <ul className="timeline-container">
      {userData.experience.map((u) => (
        <MyHistoryItem key={u.title} myself={u} />
      ))}
      </ul>
    </div>
  );
}
