import React , {useContext, createContext, useState}from 'react'

export const userContext = createContext()

const UserContextProvider = ({children}) => {
const [fullName, setFullName] = useState("")
const [emailAddress, setEmailAddress] = useState("")
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

  return (
    <userContext.Provider value={{fullName, emailAddress, setEmailAddress, setFullName, loading, setLoading, error, setError}}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
