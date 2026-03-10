import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from './layouts/Navbar'
import Acceuil from './pages/Acceuil'
import Header from './layouts/Header'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
)

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
        <hr className='border-white/50' /><Navbar /> <hr className='border-white/50' />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Acceuil />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;