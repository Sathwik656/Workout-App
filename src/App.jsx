import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WorkoutPlanner from "./pages/WorkoutPlanner"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<WorkoutPlanner />} />
    </Routes>
  )
}
