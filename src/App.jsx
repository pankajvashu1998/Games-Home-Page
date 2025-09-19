import React from 'react'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='mt-[55px] '>
        <Outlet/>
    </div>
  )
}

export default App