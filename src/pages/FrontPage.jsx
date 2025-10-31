import { Link } from 'react-router-dom'

export default function FrontPage() {
  return (
    <div>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li><Link to="/current-plan">Current Plan</Link></li>
          <li><Link to="/export-data">Export Data</Link></li>
          <li><Link to="/renew">Renew</Link></li>
          <li><Link to="/update">Update</Link></li>
        </ul>
      </nav>
    </div>
  )
}

