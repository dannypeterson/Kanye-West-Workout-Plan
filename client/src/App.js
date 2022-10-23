import './App.css'
import Home from './pages/Home'
import MuscleGroupPage from './pages/MuscleGroupPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musclegroups" element={<MuscleGroupPage />} />
      </Routes>
    </div>
  )
}

export default App
