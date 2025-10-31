import { useState, useEffect } from 'react'

export default function PaymentMethodSelectionStep({ storageKey, onBack, onNextExisting, onNextNew }) {
  const [selection, setSelection] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    setSelection(data.paymentMethodSelection || '')
  }, [storageKey])

  const handleSelection = (value) => {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
    data.paymentMethodSelection = value
    localStorage.setItem(storageKey, JSON.stringify(data))
    setSelection(value)
  }

  const handleNext = () => {
    if (selection === 'existing') {
      onNextExisting()
    } else if (selection === 'new') {
      onNextNew()
    }
  }

  return (
    <div>
      <h2>Payment Method</h2>
      <p>Would you like to use an existing payment method or add a new one?</p>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="existing"
            checked={selection === 'existing'}
            onChange={(e) => handleSelection(e.target.value)}
          />
          {' '}Use existing payment method
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="new"
            checked={selection === 'new'}
            onChange={(e) => handleSelection(e.target.value)}
          />
          {' '}Add a new payment method
        </label>
      </div>
      <br/>
      <button onClick={onBack}>Back</button>
      {selection && <button onClick={handleNext}>Next</button>}
    </div>
  )
}

