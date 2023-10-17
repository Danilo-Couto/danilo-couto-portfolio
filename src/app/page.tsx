'use client';

import { Intro } from "@/components/intro";
import Stacks from "@/components/stacks";
import { Footer } from '@/components/footer';
import { Header } from "@/components/header";
import { Projetos } from "@/components/projetos";
import { Certificados } from "@/components/certificados";

export default function Home() {

  return (
    <main>
      <Header/>
      <Intro/>
      <Stacks/>
      <Projetos/>
      <Certificados/>
      <Footer />
    </main>
  );
}