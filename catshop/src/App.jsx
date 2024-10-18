import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/footer'
import Main from './assets/components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App
