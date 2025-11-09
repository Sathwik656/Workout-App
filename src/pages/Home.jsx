import { Link } from "react-router-dom"
import tojiImage from "../assets/toji.jpeg";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="text-gradient">BroGram</h1>
        <p>Your all-in-one workout companion</p>
      </header>

      <section className="home-hero">
        <div className="hero-text">
          <h2>Train Smarter. Track Progress. Transform Yourself.</h2>
          <p>
            Join the 30-day strength and endurance challenge with BroGram. 
            Follow structured plans, track your lifts, and stay motivated 
            with visual progress tracking.
          </p>
          <Link to="/planner" className="btn-primary">Start Your Workout</Link>
        </div>

        <div className="hero-image">
          <img src={tojiImage} alt="Workout" />
        </div>
      </section>

      <section className="home-features">
        <h3>Why Choose BroGram?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fa-solid fa-dumbbell"></i>
            <h4>Personalized Workouts</h4>
            <p>Get balanced push, pull, and leg days designed for progression.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-chart-line"></i>
            <h4>Track Your Growth</h4>
            <p>Visualize your progress with every lift, set, and completed day.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-bolt"></i>
            <h4>Built for Motivation</h4>
            <p>Celebrate milestones and keep the momentum going.</p>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <h3>Explore the Workout Planner</h3>
        <p>
          BroGram’s workout planner helps you log exercises, save progress, 
          and stay consistent. Take your fitness to the next level with structured training.
        </p>
        <Link to="/planner" className="btn-secondary">Go to Planner</Link>
      </section>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} BroGram</p>
      </footer>
    </div>
  )
}
