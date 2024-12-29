import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Hyundai from './pages/hyundai'
import Kia from './pages/kia'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Byd from './pages/byd'
import Opel from './pages/Opel'
import Home from './components/Home'
import Pnf from './pages/pnf'
import Desc from './components/desc'

function App() {


  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/opel' element={<Opel/>} />
          <Route path="/kia" element={<Kia />} />
          <Route path="/hyundai" element={<Hyundai />} />
          <Route path="/byd" element={<Byd />} />
          <Route path='/desc/:id' element={<Desc/>} />
          <Route path="/*" element={<Pnf/>} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
