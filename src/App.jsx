import './css/App.css'
import './components/NavBar'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {

  return (
    <>
    <NavBar />
    <br />
    <About />
    <br />
    <Experience />
    <br />
    <Projects />
    <br />
    <Contact />
    </>
  )
}

export default App
