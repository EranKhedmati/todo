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
      })
      .catch((err) => {
        setAvaible(false)
      })
  }, [])

  // const addUser = (list)=> list.map((item, id)=> <p key={id}>{item.username}</p>)

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center gap-5 p-20'>
      <h1 className='text-4xl font-bold'>TODO LIST</h1>
      </div>
    </>
  )
}

export default App