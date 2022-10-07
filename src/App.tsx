import { Home } from "./pages/Home"

import Footer from "./components/Footer"
import Header from "./components/Header"

import { GlobalStyles } from "./styles/GlobalStyles"


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      <GlobalStyles/>
    </>
  )
}

export default App
