import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Feature from './components/Feature'
import Codeflow from './components/Codeflow'
import Price from './components/Price'
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection/>
        <Feature/>
        <Codeflow/>
        <Price/>
        <Testimonials/>
        <Footer />
      </div>
      
    </>
  )
}

export default App
