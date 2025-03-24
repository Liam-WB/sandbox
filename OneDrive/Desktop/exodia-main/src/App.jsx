import React from 'react'
import logo from './assets/LOGO.png'

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex items-center justify-center flex-col">
      <img 
        src={ logo }
        alt="Centered Image" 
        className="mb-8 object-cover"
        style={{ width: '26em', height: '26em' }} 
      />
      <h1 className="text-[6em] font-bold text-white">
        Big things coming...
      </h1>
    </div>
  )
}

export default App