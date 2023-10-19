import React from 'react';
import Link from 'next/link';
import userData from '@/libs/my_history';

interface Props {
  mySelf: {
    company?: string,
    desc: string,
    link?: string, 
    title: string,
    year: string
  }
}

function MyHistoryItem({mySelf}: Props) {
    
  return (
    <div className='li-container'>
      <div className='li-content'>
        <span className="circle" />
        <p>{mySelf.year}</p>
        <h3>{mySelf.title}</h3>
        <h4>{mySelf.company}</h4>
        <p >{mySelf.desc}</p>
        {mySelf.link ? (
        <Link href= {mySelf.link}
          target="_blank" 
          rel="noopener noreferrer">
        <h5>Link</h5>
        </Link>)
        : null
        }
      </div>
    </div>
  );
}

export function SubMe() {
  return (
    <div className="timeline-container">
      {userData.experience.map((data) => (
        <MyHistoryItem key={data.title} mySelf={data} />
      ))}
    </div>
  );
}
