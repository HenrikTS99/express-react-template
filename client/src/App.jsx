import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
        {backendData}
    </div>
  )
}

export default App
