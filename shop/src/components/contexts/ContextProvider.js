import React, { createContext, useContext, useState } from 'react'
const stateContext=createContext()
const initialState={
    cart:false,
    notification:false,

}

const ContextProvider = ({children}) => {
    const [activeMenu,setActiveMenu]=useState(true)
  return (
   <stateContext.Provider value={{activeMenu,setActiveMenu}}>
    {children}
   </stateContext.Provider>
  )
}
export const useStateContext=()=>useContext(stateContext)
export default ContextProvider
