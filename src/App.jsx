import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {


  return (
    <main className='min-h-screen w-full bg-site bg-cover bg-no-repeat overflow-hidden font-montserrat'>
      <section>
        <Navbar />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section className='min-[1024px]:mt-[600px]'>
        <Portfolio />
      </section>
      <section>
        <ContactMe />
      </section>
    </main>
  )
}

export default App
