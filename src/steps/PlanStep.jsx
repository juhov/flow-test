import { useState, useEffect } from 'react'

export default function PlanStep({ storageKey, onBack, onNext }) {
  const [plan, setPlan] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    setPlan(data.plan || '')
  }, [storageKey])

  const handleChange = (value) => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    data.plan = value
    localStorage.setItem(storageKey, JSON.stringify(data))
    setPlan(value)
  }

  return (
    <div>
      <h2>Select Plan</h2>
      <label><input type="radio" checked={plan === 'monthly'} onChange={() => handleChange('monthly')} /> Monthly</label><br/>
      <label><input type="radio" checked={plan === 'annual'} onChange={() => handleChange('annual')} /> Annual</label><br/>
      <button onClick={onBack}>Back</button>
      {plan && <button onClick={onNext}>Next</button>}
    </div>
  )
}

