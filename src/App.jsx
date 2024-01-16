import { useEffect, useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { useTranslation } from 'react-i18next'

function App() {
  const [isDark, setIsDark] = useState(true)

  //DarkMode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }

  }, [isDark])

  const handleDark = () => {
    setIsDark(!isDark)
  }

  //Translate
  const { i18n } = useTranslation();

  const handleClickChangeLanguages = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <main className={`min-h-screen w-full ${isDark ? 'bg-black/20' : 'bg-black/90'} bg-no-repeat overflow-hidden font-montserrat`}>
      <Navbar />
      <Header handleDark={handleDark} handleClickChangeLanguages={handleClickChangeLanguages} isDark={isDark} />
      <Home />
      <AboutMe />
      <Portfolio />
      <Skills />
      <ContactMe />
    </main>
  )
}

export default App
