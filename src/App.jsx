
import './App.css'
import DiagnosisHistory from './components/DiagnosisHistory'
import DiagnosticList from './components/DiagnosticList'
import LabResults from './components/LabResults'

import NavBar from './components/NavBar'
import Patients from './components/Patients'
import Profile from './components/Profile'


function App() {


  return (
    <>
      <NavBar/>
      <div className='dashboard'>
      <Patients/>
      <DiagnosisHistory/>
      <Profile/>
      </div>
      <div className='dashboard'>
      <DiagnosticList/>
      <LabResults/>
      </div>
    </>
  )
}

export default App
