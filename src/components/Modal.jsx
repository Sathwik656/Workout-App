import ReactDom from 'react-dom'
import { useEffect } from 'react'

export default function Modal(props) {
  const { showExerciseDescription, handleCloseModal } = props
  const { name = '', description = '' } = showExerciseDescription || {}

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') handleCloseModal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [handleCloseModal])

  const portalRoot = typeof document !== 'undefined' ? document.getElementById('portal') : null
  if (!portalRoot) {
    return null
  }

  return ReactDom.createPortal((
    <div className='modal-container' role="dialog" aria-modal="true" aria-label={`${name} description`}>
      <button className='modal-underlay' onClick={handleCloseModal} />
      <div className='modal-content'>
        <div className="modal-header">
          <h6>Exercise</h6>
          <h2 className='skill-name'>{name.replaceAll('-', ' ')}</h2>
        </div>
        <div className="modal-body">
          <h6>How to</h6>
          <p>{description}</p>
        </div>
        <br></br>
        <div className="modal-actions">
          <button onClick={handleCloseModal} className="btn-secondary">Close</button>
        </div>
      </div>
    </div>
  ), portalRoot)
}
