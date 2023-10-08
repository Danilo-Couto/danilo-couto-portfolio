'use client';

import { Header, Projects } from "@/components";
import { Intro } from "@/components/intro";
import Stacks from "@/components/stacks";
import '../styles/intro.css';
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Intro/>
      {/* <MySelf /> */}
      <Stacks />
      <Projects />
      <Footer />
    </main>
  )
}

// versao em ingles
// meus cursos e certificados
// 
