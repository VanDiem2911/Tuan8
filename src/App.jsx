import { useState } from 'react'
import './App.css'
import Menu from './Pages/Menu'
import Content from './Pages/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <Menu/>
    <Content/>
    </div>
        
        
    </>
  )
}

export default App
