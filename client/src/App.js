import './App.css'
import Home from './pages/Home'
import MuscleGroupPage from './pages/MuscleGroupPage'
import ExerciseList from './pages/ExerciseList'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import MyWorkout from './pages/MyWorkout'
import FeaturedWorkout from './pages/FeaturedWorkout'

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musclegroups" element={<MuscleGroupPage />} />
        <Route path="/musclegroups/:id" element={<ExerciseList />} />
        <Route path="/exercise" element={<Form />} />
        <Route path="/myworkouts" element={<MyWorkout />} />
        <Route path="/featured" element={<FeaturedWorkout />} />
      </Routes>
    </div>
  )
}

export default App
