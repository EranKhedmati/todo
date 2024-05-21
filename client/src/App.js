import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setbackendData] = useState([{}])

  useEffect(()=>{
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setbackendData(data);
      })
  }, [])

  return (
    <div>

    </div>
  )
}

export default App