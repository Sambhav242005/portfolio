import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="bg min-h-screen w-svw lg:w-full overflow-hidden">
      <Hero />
      <Separator className="h-0.5 bg-slate-400 " />
      <About />
      <Separator className="h-0.5 bg-slate-400 " />
      <Skills />
      <Portfolio />
      <Testimonial />
    </main>
  );
}
