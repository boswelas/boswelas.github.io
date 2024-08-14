import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div>
      <div className="fixed top-10 left-10 z-50">
        <Menu />
      </div>
      <section id="home">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
