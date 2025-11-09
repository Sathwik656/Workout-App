import { useState, useEffect, useMemo } from 'react'
import { workoutProgram as training_plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

export default function Grid() {
  const [savedWorkouts, setSavedWorkouts] = useState({})
  const [selectedWorkout, setSelectedWorkout] = useState(null)

  useEffect(() => {
    if (!localStorage) return
    const savedData = localStorage.getItem('brogram')
    setSavedWorkouts(savedData ? JSON.parse(savedData) : {})
  }, [])

  const completedWorkouts = useMemo(() => {
    return Object.keys(savedWorkouts || {}).filter(k => savedWorkouts[k]?.isComplete)
  }, [savedWorkouts])

  function persist(newObj) {
    setSavedWorkouts(newObj)
    localStorage.setItem('brogram', JSON.stringify(newObj))
  }

  function handleSave(index, data) {
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete
      }
    }
    persist(newObj)
    setSelectedWorkout(null)
  }

  function handleComplete(index, data) {
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: true
      }
    }
    persist(newObj)
    setSelectedWorkout(null)
  }

  const total = Object.keys(training_plan).length
  const completedCount = completedWorkouts.length
  const progressPct = Math.round((completedCount / total) * 100)

  return (
    <section className="training-section">
      <div className="progress-header">
        <div className="progress-info">
          <h3>Training Plan</h3>
          <p className="muted">Complete the workouts and track your progress</p>
        </div>

        <div className="progress-widget">
          <div className="progress-text">{completedCount} / {total} completed</div>
          <div className="progress-bar" role="progressbar" aria-valuenow={progressPct} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      <div className="training-plan-grid">
        {Object.keys(training_plan).map((_, workoutIndex) => {
          const isLocked = workoutIndex === 0 ? false : !completedWorkouts.includes(String(workoutIndex - 1))
          const type = workoutIndex % 3 === 0 ? 'Push' : workoutIndex % 3 === 1 ? 'Pull' : 'Legs'
          const trainingPlan = training_plan[workoutIndex]
          const dayNum = String(workoutIndex + 1).padStart(2, '0')
          const icon = workoutIndex % 3 === 0 ? (
            <i className='fa-solid fa-dumbbell'></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className='fa-solid fa-weight-hanging'></i>
          ) : (
            <i className='fa-solid fa-bolt'></i>
          )

          if (workoutIndex === selectedWorkout) {
            return (
              <WorkoutCard
                savedWeights={savedWorkouts?.[workoutIndex]?.weights}
                handleSave={handleSave}
                handleComplete={handleComplete}
                key={workoutIndex}
                trainingPlan={trainingPlan}
                type={type}
                workoutIndex={workoutIndex}
                icon={icon}
                dayNum={dayNum}
              />
            )
          }

          return (
            <button
              onClick={() => { if (!isLocked) setSelectedWorkout(workoutIndex) }}
              className={'card plan-card ' + (isLocked ? 'inactive' : '')}
              key={workoutIndex}
              aria-disabled={isLocked}
              aria-label={`Open Day ${dayNum} ${type}`}
            >
              <div className='plan-card-header'>
                <p>Day {dayNum}</p>
                {isLocked ? <i className='fa-solid fa-lock'></i> : icon}
              </div>

              <div className='plan-card-header plan-card-title'>
                <h4><b>{type}</b></h4>
                <small className="muted">{isLocked ? 'Locked' : 'Open'}</small>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
