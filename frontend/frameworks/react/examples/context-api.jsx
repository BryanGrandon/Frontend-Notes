import { createContext, useContext } from 'react'

// Create context
const AppContext = createContext(null)

// Provider component
export function AppProvider({ children }) {
  const value = {
    number: 12,
    message: 'Hello',
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Consumer component
export function Component() {
  const { number } = useContext(AppContext)
  return <h2>{number}</h2>
}
