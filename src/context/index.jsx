import {  createContext } from "react";
import PropirtiesProvider from "./propirties";

const Root =createContext()

const RootContext=({children})=>{
    return (
        <Root.Provider>
            <PropirtiesProvider>
                {children}
            </PropirtiesProvider>
            
        </Root.Provider>
    )
}
export default RootContext