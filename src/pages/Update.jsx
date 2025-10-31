import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddressStep from '../steps/AddressStep'
import PlanStep from '../steps/PlanStep'
import CompleteStep from '../steps/CompleteStep'

export default function Update() {
  const [params, setParams] = useSearchParams()
  const step = params.get('step') || 'address'
  const [data, setData] = useState({})

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('update') || '{}'))
  }, [step])

  const renderStep = () => {
    switch (step) {
      case 'address':
        return <AddressStep storageKey="update" onNext={() => setParams({ step: 'plan' })} />
      case 'plan':
        return <PlanStep storageKey="update" onBack={() => setParams({})} onNext={() => setParams({ step: 'complete' })} />
      case 'complete':
        return <CompleteStep data={data} />
      default:
        return <AddressStep storageKey="update" onNext={() => setParams({ step: 'plan' })} />
    }
  }

  return (
    <div>
      <h1>Update</h1>
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

