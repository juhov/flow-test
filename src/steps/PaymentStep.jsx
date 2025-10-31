import { useState, useEffect } from 'react'

export default function PaymentStep({ storageKey, onBack, onSubmit }) {
  const [card, setCard] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    setCard(data.card || '')
  }, [storageKey])

  const handleChange = (value) => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    data.card = value
    localStorage.setItem(storageKey, JSON.stringify(data))
    setCard(value)
  }

  return (
    <div>
      <h2>Payment</h2>
      <label>Card Number: <input value={card} onChange={(e) => handleChange(e.target.value)} /></label><br/>
      <button onClick={onBack}>Back</button>
      {card && <button onClick={onSubmit}>Submit</button>}
    </div>
  )
}

