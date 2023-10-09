'use client';

import { Intro } from "@/components/intro";
import Stacks from "@/components/stacks";
import { Certificates, Header, Projects } from "@/components";
import { Footer } from '@/components/footer';

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
  )
}