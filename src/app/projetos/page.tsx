'use client';

import React from 'react';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SubProjects } from "@/components/sub_projects";

export default function Projetos() {
  return (
    <main>
      <Header/>
      <SubProjects/>
      <Footer/>
    </main>
  );
}

// criar filtro por linguagens, topicos etc
