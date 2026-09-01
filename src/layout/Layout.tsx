import NavBar from "../components/NavBar";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";
import Skills from "./Skills";
import { Analytics } from "@vercel/analytics/react";
const Layout = () => {
  return (
    <div className="bg-ground selection:bg-genoa/35 min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Featured />
        <Skills />
        <AboutMe />
        <Connect />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;
