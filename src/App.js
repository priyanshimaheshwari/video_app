import React from 'react'

import Menu from './components/Menu';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <div className='flex'>
      <Menu />
      <div className='flex flex-col w-240'>
        <Navbar />
        <div>
          video cards
        </div>
      </div>
    </div>
  )
}

export default App