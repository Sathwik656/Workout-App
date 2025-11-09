export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h2 className="hero-title">Follow a simple plan. Build better habits.</h2>
          <p className="hero-sub">
            A focused 30-day routine built around Push • Pull • Legs. Track your lifts, log progress, and complete the program with confidence.
          </p>

          <ul className="hero-features">
            <li><strong>Simple structure:</strong> Built to be consistent and sustainable.</li>
            <li><strong>Data-driven:</strong> Save weights, mark completions, and monitor progress.</li>
            <li><strong>Gym-friendly:</strong> Exercises with quick descriptions and cues.</li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h4>How it works</h4>
            <ul>
              <p>Pick the day's workout card</p>
              <p>Log your max weight for each exercise</p>
              <p>Save & mark complete to unlock the next session</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
