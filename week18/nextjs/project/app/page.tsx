
import Link from "next/link"

export default function Home(){
  return (
    <div className="flex items-center justify-center gap-8">
      Todo application
      <br />
      <Link href='auth/signin'>Sign in to Todo app</Link>
      <Link href='auth/signup'>Siup in to Todo app</Link>
    </div>
  )
}