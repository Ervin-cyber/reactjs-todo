import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePageComponent } from './components/HomePageComponent'
import { GenerateAndRedirectComponent } from './components/GenerateAndRedirectComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/generate' element={<GenerateAndRedirectComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
