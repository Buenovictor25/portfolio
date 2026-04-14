import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}