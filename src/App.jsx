import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import AddProducts from './templates/AddProducts'
import ViewProducts from './templates/ViewProducts'
import EditProducts from './templates/EditProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Header/>
        <div>
          <Routes>
            <Route path='/add' element={<AddProducts/>}/>
            <Route path='/view' element={<ViewProducts/>}/>
            <Route path='edit/:prodId' element={<EditProducts/>} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
