import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AboutLtFoods from './Pages/AboutLtFoods'
import BusinessModel from './Pages/BusinessModel'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Message from './Pages/Message'
import KeyPerf from './Pages/KeyPerf'
import Offerings from './Pages/Offerings'
import GlobalPresence from './Pages/GlobalPresence'
import Strategy from './Pages/Strategy'
import RiskMgt from './Pages/RiskMgt'
import StakeholderEngg from './Pages/StakeholderEngg'
import Materiality from './Pages/Materiality'
import ESGFramework from './Pages/ESGFramework'
import FinCap from './Pages/FinCap'
import MFDCap from './Pages/MFDCap'
import HumanCap from './Pages/HumanCap'
import IntelCap from './Pages/IntelCap'
import SrCap from './Pages/SrCap'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import NatCap from './Pages/NatCap'
import Bod from './Pages/Bod'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutLtFoods/>}/>
        <Route path='/business-model' element={<BusinessModel/>}/>
        <Route path='/leadership-message' element={<Message/>}/>
        <Route path='/key-performance-highlights' element={<KeyPerf/>}/>
        <Route path='/our-offerings' element={<Offerings/>}/>
        <Route path='/global-presence' element={<GlobalPresence/>}/>
        <Route path='/strategy' element={<Strategy/>}/>
        <Route path='/risk-management' element={<RiskMgt/>}/>
        <Route path='/materiality' element={<Materiality/>}/>
        <Route path='/stakeholder-engagement' element={<StakeholderEngg/>}/>
        <Route path='/ESG-framework-and-scorecard' element={<ESGFramework/>}/>
        <Route path='/financial-capital' element={<FinCap/>}/>
        <Route path='/manufactured-capital' element={<MFDCap/>}/>
        <Route path='/human-capital' element={<HumanCap/>}/>
        <Route path='/intellectual-capital' element={<IntelCap/>}/>
        <Route path='/social-and-relationship-capital' element={<SrCap/>}/>
        <Route path='/natural-capital' element={<NatCap/>}/>
        <Route path='/profile-of-board' element={<Bod/>}/>
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
