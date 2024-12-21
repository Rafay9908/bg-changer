import './App.css'
import Card from './components/Card'
import BgBtn from './components/BgBtn'
import { useEffect, useState } from 'react'
import { BgProvider } from './context/bg'



function App() {
  const [bgColor, setBgColor] = useState();

  const lightBg = () => {
    setBgColor('light');
  }

  const darkBg  = () => {
    setBgColor('dark');
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("light", "dark")
    html.classList.add(bgColor);

  }, [bgColor])


  return (
    <BgProvider value={{bgColor, darkBg, lightBg}}>
    <BgBtn />
    <Card />
    </BgProvider>
  )
}

export default App
