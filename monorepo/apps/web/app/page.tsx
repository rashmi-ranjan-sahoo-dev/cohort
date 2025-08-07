import { TextInput } from "@repo/ui/text-input"


export default function Home() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background:"black",
      justifyContent:"center",
      justifyItems:"center"
    }}>
      <div style={{
        display:"flex",
        justifyContent:"center",
        justifyItems:"center",
        flexDirection:"column"
      }}>
        <TextInput size="big" placeholder={"join room"}></TextInput>
        <button>Join room</button>
      </div>      
    </div>
  )
}
