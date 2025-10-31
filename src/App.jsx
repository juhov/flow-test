import { Routes, Route } from 'react-router-dom'
import FrontPage from './pages/FrontPage'
import CurrentPlan from './pages/CurrentPlan'
import ExportData from './pages/ExportData'
import Renew from './pages/Renew'
import Update from './pages/Update'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/current-plan" element={<CurrentPlan />} />
      <Route path="/export-data" element={<ExportData />} />
      <Route path="/renew" element={<Renew />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  )
}

