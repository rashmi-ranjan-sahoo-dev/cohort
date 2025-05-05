import React from 'react'

const App = () => {
  const users = [
    {
    id:1,name:"mango"
    },
    {
    id:2,name:"apple"
    }]
  return (
    <div>
      <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li> // Unique ID use kiya
      ))}
       </ul>
    </div>
  )
}

export default App
