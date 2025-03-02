import axios from "axios"
import { useState, useEffect } from "react"
import { MembershipsIndex } from "./MembershipsIndex"
import { SignupPage } from "./SignupPage"
import { LoginPage } from "./LoginPage"
import { LogoutLink } from "./LogoutLink"

export function MembershipPage() {
  const [memberships, setMemberships] = useState([])
  
  const handleIndex = () => {
    console.log('getting memberships')
    axios.get("http://localhost:3000/memberships.json").then(response => {
      console.log(response.data)
      setMemberships(response.data)
    })
  }
  useEffect(handleIndex,[]);


  return (
    <main>
      <MembershipsIndex memberships={memberships}/>
      <SignupPage />
      <LoginPage/>
      <LogoutLink/>
    </main>
  )
}