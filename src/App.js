import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";

import About from "./components/About";
import Portfolio from "./components/Portfolio";

import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Extra from "./components/Extra";
function App() {
  return (
    <div className="App">
      
      
      <NavBar />
      <Home />
      <About />

      <Portfolio />
      <Education />
      <Experience />
      <Extra />
{/*       <SocialLink />
 */}      <Contact />
      
      <SocialLink />
      <Footer />
    </div>
  );
}

export default App;
