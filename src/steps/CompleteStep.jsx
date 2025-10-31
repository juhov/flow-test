import { Link } from 'react-router-dom'

export default function CompleteStep({ data }) {
  return (
    <div>
      <h2>Complete!</h2>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
      ))}
      <br/>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

