import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
  const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props
  const { warmup = [], workout = [] } = trainingPlan || {}
  const [showExerciseDescription, setShowExerciseDescription] = useState(null)
  const [weights, setWeights] = useState(savedWeights || {})

  useEffect(() => {
    // when savedWeights changes (opening card), sync
    setWeights(savedWeights || {})
  }, [savedWeights])

  function handleAddWeight(title, weight) {
    const newObj = {
      ...weights,
      [title]: weight
    }
    setWeights(newObj)
  }

  const canComplete = Object.keys(weights).length === workout.length && workout.length > 0

  return (
    <div className="workout-container">
      {showExerciseDescription && (
        <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => setShowExerciseDescription(null)} />
      )}

      <div className="workout-card card elevated">
        <div className="plan-card-header">
          <p>Day {dayNum}</p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2><b>{type} Workout</b></h2>
          <div className="small-meta muted">Focus: Strength & consistency</div>
        </div>
      </div>

      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max</h6>

        {warmup.map((warmupExercise, i) => (
          <React.Fragment key={`w-u-${i}`}>
            <div className="exercise-name">
              <p>{i + 1}. {warmupExercise.name}</p>
              <button onClick={() => setShowExerciseDescription({
                name: warmupExercise.name,
                description: exerciseDescriptions[warmupExercise.name]
              })} className="help-icon" aria-label={`Info for ${warmupExercise.name}`}>
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="exercise-info">{warmupExercise.sets}</p>
            <p className="exercise-info">{warmupExercise.reps}</p>
            <input className="weight-input" placeholder="N/A" disabled />
          </React.Fragment>
        ))}
      </div>

      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight (kg)</h6>

        {workout.map((workoutExercise, idx) => (
          <React.Fragment key={`w-o-${idx}`}>
            <div className="exercise-name">
              <p>{idx + 1}. {workoutExercise.name}</p>
              <button onClick={() => setShowExerciseDescription({
                name: workoutExercise.name,
                description: exerciseDescriptions[workoutExercise.name]
              })} className="help-icon" aria-label={`Info for ${workoutExercise.name}`}>
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="exercise-info">{workoutExercise.sets}</p>
            <p className="exercise-info">{workoutExercise.reps}</p>
            <input
              value={weights[workoutExercise.name] || ''}
              onChange={(e) => handleAddWeight(workoutExercise.name, e.target.value)}
              className="weight-input"
              inputMode="numeric"
              placeholder="—"
            />
          </React.Fragment>
        ))}
      </div>

      <div className="workout-buttons">
        <button onClick={() => handleSave(workoutIndex, { weights })} className="btn-secondary">Save & Exit</button>
        <button
          onClick={() => handleComplete(workoutIndex, { weights })}
          disabled={!canComplete}
          className={`btn-primary ${!canComplete ? 'disabled' : ''}`}
        >
          Complete
        </button>
      </div>
    </div>
  )
}
