import './App.css'
import Home from './pages/Home'
import MuscleGroupPage from './pages/MuscleGroupPage'
import ExerciseList from './pages/ExerciseList'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import MyWorkout from './pages/MyWorkout'
import FeaturedWorkout from './pages/FeaturedWorkout'
import { useState, useEffect } from 'react'
import IndivWorkout from './components/IndivWorkout'
import Featured from './components/Featured'
import WorkoutType from './pages/WorkoutType'

const App = () => {
  //form on MuscleGroupPage
  const initialState = {
    name: '',
    exercises: []
  }

  const [formState, setFormState] = useState(initialState)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  return (
    <div className="main">
      <Routes>
        <Route path="/type" element={<WorkoutType />} />
        <Route path="/" element={<Home homePage={true} />} />
        <Route
          path="/musclegroups"
          element={
            <MuscleGroupPage
              initialState={initialState}
              formState={formState}
              setFormState={setFormState}
            />
          }
        />
        <Route
          path="/musclegroups/:id"
          element={
            <ExerciseList formState={formState} setFormState={setFormState} />
          }
        />
        <Route path="/exercise" element={<Form />} />
        <Route path="/featured" element={<FeaturedWorkout />} />
        <Route path="/featured/:id" element={<Featured />} />
        <Route path="/myworkouts" element={<MyWorkout />} />
        <Route
          path="/myworkouts/:id"
          element={
            <IndivWorkout
              setFormState={setFormState}
              isHovering={isHovering}
              setIsHovering={setIsHovering}
              handleMouseOver={handleMouseOver}
            />
          }
        />
        <Route
          path="/myworkouts/:id/update"
          element={
            <MuscleGroupPage
              formState={formState}
              setFormState={setFormState}
              initialState={initialState}
              update={true}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
