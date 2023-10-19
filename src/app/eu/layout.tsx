import React from 'react';
import '../../styles/sub_me.css';

export default function Layout({ children,
}: { children: React.ReactNode;}) {
  return (
    <>
      {children}
    </>
  );
}