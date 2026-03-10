import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layouts/Layout'
import Accueil from './pages/Accueil'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          {/* Add more pages here as you create them */}
          {/* <Route path="/chambres-suites" element={<ChambresEtSuites />} /> */}
          {/* <Route path="/restaurant" element={<Restaurant />} /> */}
          {/* <Route path="/animation" element={<Animation />} /> */}
          {/* <Route path="/que-faire" element={<QueFaire />} /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;