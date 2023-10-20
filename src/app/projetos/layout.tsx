import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '40 Projetos em Desenvolvimento de Software',
  description: 'Projetos Front-End e Back-End em JavaScript, NodeJs, React, NextJS, TypeScript, Python, Java, MySQL, MongoDB e Com Testes Automatizados'
}

export default function Layout({ children,
}: { children: React.ReactNode;}) {
  return (
    <>
      {children}
    </>
  );
}