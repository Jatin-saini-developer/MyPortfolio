import './App.css'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <Header/>
        <About/>
        <Skills/>

      </div>
    </>
  )
}

export default App
