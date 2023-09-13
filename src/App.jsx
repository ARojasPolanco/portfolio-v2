import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {


  return (
    <main className='min-h-screen w-full bg-text-200 overflow-hidden'>
      <section>
        <Navbar />
      </section>
      {/* <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <ContactMe />
      </section> */}
    </main>
  )
}

export default App
