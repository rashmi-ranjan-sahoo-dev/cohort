import { TextInput }  from "@repo/ui/input";

export default function Home() {
  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        justifyItems:"center"
       }}>
       <div style={{
        margin:"206px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
       }}>
         <TextInput size="small" onChange={() => {
          alert("hii there")
         }} placeholder={""}></TextInput>
         <button>Join now</button>
       </div>
    </div>
  );
}
