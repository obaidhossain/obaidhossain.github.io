import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Blog       from "./components/Blog";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";

const SECTIONS = ["about", "skills", "projects", "github", "blog", "contact"];

export default function App() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}