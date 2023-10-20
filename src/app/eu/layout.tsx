import React from 'react';
import { Metadata } from 'next';
import '../../styles/sub_me.css';

export const metadata: Metadata = {
  title: 'Minha História Até Aqui',
  description: 'Ex-publicitário, motociclista nômade, empreendor hoteleiro e desenvolvedor web'
}

export default function Layout({ children,
}: { children: React.ReactNode;}) {
  return (
    <>
      {children}
    </>
  );
}