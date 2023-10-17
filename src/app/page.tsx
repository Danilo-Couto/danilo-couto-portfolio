'use client';

import { Intro } from "@/components/intro";
import Stacks from "@/components/stacks";
import { Footer } from '@/components/footer';
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";

export default function Home() {

  return (
    <main>
      <Header/>
      <Intro/>
      <Stacks/>
      <Projects/>
      <Certificates/>
      <Footer />
    </main>
  );
}