import {  createContext } from "react";

const PropirtiesContext =createContext()

const PropirtiesProvider=({children})=>{
    return (
        <PropirtiesContext.Provider>
            {children}
        </PropirtiesContext.Provider>
    )
}
export default PropirtiesProvider