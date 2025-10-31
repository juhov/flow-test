import { useState, useEffect } from 'react'

export default function AddressStep({ storageKey, onNext }) {
  const [name, setName] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    setName(data.name || '')
  }, [storageKey])

  const handleChange = (value) => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    data.name = value
    localStorage.setItem(storageKey, JSON.stringify(data))
    setName(value)
  }

  return (
    <div>
      <h2>Address</h2>
      <label>Name: <input value={name} onChange={(e) => handleChange(e.target.value)} /></label><br/>
      {name && <button onClick={onNext}>Next</button>}
    </div>
  )
}

