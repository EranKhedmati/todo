import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState();
  const [avaible, setAvaible] = useState(false);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(backData => {
        setAvaible(true);
        setData(backData);
        console.log(data);
      })
      .catch((err) => {
         setAvaible(false) 
        })
  }, [])

  const addUser = (list)=> list.map((item, id)=> <p key={id}>{item.username}</p>)

  return (
    <div className='App'>
      {avaible ? addUser(data) : <p>SERVER IS DOWN....</p>}
    </div>
  )
}

export default App