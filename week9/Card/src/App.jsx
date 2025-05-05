
import './App.css'

function App() {

  return (
    <>
      <Card />
    </>
  )
}

export function Card(){
  return( 
  <div>
        <div style={{height:200,width:350,backgroundColor:"white",borderRadius:20}}>
        <img src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" style={{height:50,width:50,borderRadius:50,marginTop:20}} alt="" />
        <h4 style={{color:"black"}}>HI rinku , are ou hiring?</h4>
        <button style={{color:"blue",borderRadius:20,border:"1px solid black" , padding:"5px 10px",backgroundColor:"white"}}>Yes,I am hiring </button>
        <button style={{color:"blue",borderRadius:20,border:"1px solid black" , padding:"5px 10px",backgroundColor:"white"}} >No,not right now</button>
        </div>
        </div>
  )
}

export default App
