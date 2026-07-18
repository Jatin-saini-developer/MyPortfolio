import './App.css'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import OpenSource from './components/OpenSource'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <Header/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <OpenSource/>
        <Education/>

      </div>
    </>
  )
}

export default App
