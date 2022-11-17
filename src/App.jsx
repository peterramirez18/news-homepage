import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Posts from './components/Posts'

function App() {

  return (
    <div className=' font-inter mb-10' >
      <Header />
      <Main />
      <Posts />
    </div>
  )
}

export default App
