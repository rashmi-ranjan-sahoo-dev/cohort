import {BrowserRouter, Routes, Route, Link , useNavigate} from "react-router-dom"
import { Outlet } from "react-router-dom"

const App = () => {

  return (<div>
     <BrowserRouter>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class12</Link>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/neet/online-coaching-class-11" element= {<Class11Program/>}></Route>
    <Route path="/neet/online-coaching-class-12" element= {<Class12Program/>}></Route>\
    <Route path="/" element= {<Landing/>}></Route>
    <Route path="*" element= {<Error/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

function Layout(){
  return <div>
    header
    <Outlet/>
    footer
  </div>
}

function Error(){
  return(
    <div>
      404 page not found
    </div>
  )
}


function Landing(){
  return (
    <>
    <h1>Welcome landing page</h1>
    </>
  )
}

function Class11Program(){
  return (
    <>
     <h1>Class11Program</h1>
    </>
  )
}

function Class12Program (){
   const navigate = useNavigate();

  function redirect(){
       navigate("/");
  }
  return (
    <>
    <h1>Class12Program</h1>
    <button onClick={redirect}>Back to root page</button>
    </>
  )
}


export default App
