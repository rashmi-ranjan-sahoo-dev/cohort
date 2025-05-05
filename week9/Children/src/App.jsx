import React from 'react'
// import { Children } from 'react'

const App = () => {
  return (
    <div style={{"display":"flex","color":"blue","background":"pink",width:400,justifyContent:"space-between"}}>
      <Card>
        <div>
          <p>What you want type </p>
          <br />
          <input type="text" />
        </div>
      </Card>
      <Card>
        <div>
          hi there
        </div>
      </Card>
    </div>
  )
}

const Card = ({ children }) => {
  return (
    <div style={{background:"black"}}>
      {children}
    </div>
  )
}

export default App
