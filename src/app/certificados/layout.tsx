import React from 'react';
import { Metadata } from 'next';
import '../../styles/sub_certificados.css'

export const metadata: Metadata = {
  title: 'Certificados em Software Development',
  description: 'Certificados de Desenvolvedor de Software Trybe'
}

export default function Layout({ children,
}: { children: React.ReactNode;}) {
  return (
    <>
      {children}
    </>
  );
}