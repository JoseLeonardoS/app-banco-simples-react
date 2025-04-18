import Header from './Components/Header'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import AccountDashboard from './Pages/AccountDashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import { Navigate } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute><AccountDashboard /></ProtectedRoute>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default App
