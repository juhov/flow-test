import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddressStep from '../steps/AddressStep'
import PlanStep from '../steps/PlanStep'
import PaymentMethodSelectionStep from '../steps/PaymentMethodSelectionStep'
import PaymentStep from '../steps/PaymentStep'
import CompleteStep from '../steps/CompleteStep'

export default function Renew() {
  const [params, setParams] = useSearchParams()
  const step = params.get('step') || 'address'
  const [data, setData] = useState({})

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('renew') || '{}'))
  }, [step])

  const renderStep = () => {
    switch (step) {
      case 'address':
        return <AddressStep storageKey="renew" onNext={() => setParams({ step: 'plan' })} />
      case 'plan':
        return <PlanStep storageKey="renew" onBack={() => setParams({})} onNext={() => setParams({ step: 'payment-method' })} />
      case 'payment-method':
        return <PaymentMethodSelectionStep storageKey="renew" onBack={() => setParams({ step: 'plan' })} onNextExisting={() => setParams({ step: 'complete' })} onNextNew={() => setParams({ step: 'payment' })} />
      case 'payment':
        return <PaymentStep storageKey="renew" onBack={() => setParams({ step: 'payment-method' })} onSubmit={() => setParams({ step: 'complete' })} />
      case 'complete':
        return <CompleteStep data={data} />
      default:
        return <AddressStep storageKey="renew" onNext={() => setParams({ step: 'plan' })} />
    }
  }

  return (
    <div>
      <h1>Renew</h1>
      {renderStep()}
      {step !== 'complete' && (
        <>
          <br/><br/>
          <Link to="/">Home</Link>
        </>
      )}
    </div>
  )
}

