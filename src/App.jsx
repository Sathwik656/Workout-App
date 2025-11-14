import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WorkoutPlanner from "./pages/WorkoutPlanner"
import Aurora from "./Aurora"

export default function App() {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<WorkoutPlanner />} />
      </Routes>
    </>
  )
}
