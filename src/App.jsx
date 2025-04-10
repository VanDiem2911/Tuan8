import { useState } from 'react'
import './App.css'
import Menu from './Pages/Menu'
import Overview from './Pages/Overview'
import DetailedReport from './Pages/DetailedReport'
import ProjectPage from './Pages/ProjectPage'
import AnalyticsPage from './Pages/AnalyticsPage'
import MessagesPage from './Pages/MessagesPage'
import TeamPage from './Pages/TeamPage'
import IntegrationPage from './Pages/IntegrationPage'
import Header from './Pages/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="grid grid-cols-[16rem_1fr] h-screen">
      <Menu/>
      <main className="bg-gray-50 p-6 overflow-y-auto">
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Overview />
              <DetailedReport/>
              </>
            }
          />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/analytics" element={<AnalyticsPage/>} />
          <Route path="/messages" element={<MessagesPage/>} />
          <Route path="/teams" element={<TeamPage/>} />
          <Route path="/integrations" element={<IntegrationPage />} />
        </Routes>
      </main>
    </div>
  </Router>
  )
}

export default App;
