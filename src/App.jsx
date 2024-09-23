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

function App() {

  return (
    <BrowserRouter>
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
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
