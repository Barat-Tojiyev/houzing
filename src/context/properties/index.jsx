import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reducer } from './reducer'

const Properties=createContext()

export const PropertiesContext = ({children}) => {
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <Properties.Provider value={[state,dispatch]}>
        {children}
    </Properties.Provider>
  )
}
export default PropertiesContext
