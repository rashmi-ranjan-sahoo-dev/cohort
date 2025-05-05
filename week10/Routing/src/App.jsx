import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
       <BrowserRouter>

       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path = "/neet/online-coaching-class-11" element={<Class11Program/>} />
        <Route path = "/neet/online-coaching-class-12" element={<Class12Program/>} />
        <Route path = "/" element={<Loading/>} />
        <Route path= "*" element={<Errorpage/>} />
        </Route>
       </Routes>
       
       </BrowserRouter>
      </div>
    </>
  )
}

function Layout()
{
  return <div style={{height:"100vh",backgroundColor:"blue"}}>
    <Header/>
    <div style={{height:"90vh",backgroundColor:"pink"}}>
      <Outlet/>
    </div>
    footer
  </div>
}

function Header()
{
  return <div>
       <Link to = "/">Allen</Link>|
       <Link to = "/neet/online-coaching-class-11">Class11</Link>
       <Link to = "/neet/online-coaching-class-12">Class12</Link>
  </div>
}

function Errorpage(){
  return <div>
    <p>Sorry page not fund</p>
  </div>
}

function Loading()
{
  return <div>
    welcome to allen
  </div>
}

function Class11Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return <div>
    this is class 11
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return <div>
    this is class 12
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
export default App
