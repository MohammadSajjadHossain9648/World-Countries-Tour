import './App.css'
import Countries from './components/countries/Countries'

function App() {
  return (
    <>
      <h1 className='header_title'>Welcome to <br /> World Countries Tour</h1>
      <p className='header_description'>
        Access a wealth of information about countries worldwide with our World Countries Database. Find essential details like country names, flags, and key statistics in a user-friendly format. Perfect for students, travelers, and enthusiasts, our platform makes it easy to explore and compare the diversity of nations at a glance!
      </p>

      <Countries></Countries>
    </>
  )
}

export default App
