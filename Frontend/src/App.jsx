import './App.css'

import Navbar from './Components/Navbar'
import Frame1 from './Components/Frame1'
import Frame2 from './Components/Frame2'
import WorkExperience from './Components/WorkExperience'
import ProjectsSection from './Components/PersonalProjects'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Foter'

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" >
        <Frame1 />
      </section>

      {/* About Me Section */}
      <section id="skills">
        <Frame2 />
      </section>

      {/* Services / Work Experience Section */}
      <section id="experience" >
        <WorkExperience />
      </section>

      {/* Projects Section */}
      <section id="projects" >
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" >
        <ContactUs />
      </section>

      <Footer />
    </>
  )
}

export default App
