import { Link } from 'react-router-dom'

export default function CurrentPlan() {
  return (
    <div>
      <h1>Current Plan</h1>
      <p>Dummy content for current plan page.</p>

      <Link to="/update?step=1">Update Plan</Link><br/>
      <Link to="/">Back</Link>
    </div>
  )
}

