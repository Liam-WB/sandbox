import React from 'react'
import logo from './assets/LOGO.png'

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex items-center justify-center flex-col">
      <img 
        src={ logo }
        alt="Centered Image" 
        className="object-cover"
        style={{ width: '40em', height: '26em' }} 
      />
      <h2 className="text-[2em] font-bold text-white">
        Thanks for your input!
      </h2>
      <h1 className="text-[6em] font-bold text-white">
        Big things coming...
      </h1>
      <footer class="text-white text-center py-10 mt-8">
        <p>&copy; 2025 Team Exodia Project. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App