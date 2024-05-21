import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setbackendData] = useState([{}])

  useEffect(()=>{
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setbackendData(data);
      }).catch(err => console.log(err));
  }, [])

  return (
    <div>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user,id)=>{
          return <p key={id}>{user}</p>
        })
      )}
      {backendData ? (
        <p>{backendData.message}</p>
      ): (
        <p>did not recieved</p>
      )}
    </div>
  )
}

export default App