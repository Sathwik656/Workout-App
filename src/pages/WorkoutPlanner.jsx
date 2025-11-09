import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Hero from "../components/Hero"

export default function WorkoutPlanner() {
  return (
    <Layout>
      <main>
        {/* ✅ Add this Home button section */}
        <div className="planner-nav">
          <Link to="/" className="btn-home">
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </div>

        {/* Your existing content */}
        <Hero />
        <Grid />
      </main>
    </Layout>
  )
}
