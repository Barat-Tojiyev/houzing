import {  createContext ,useReducer} from "react";
import reducer from './reducer'

const PropirtiesContext =createContext()

const PropirtiesProvider=({children})=>{
    const [state, dispatch]=useReducer(reducer,0)
    return (
        <PropirtiesContext.Provider value={[state,dispatch]}>
            {children}
        </PropirtiesContext.Provider>
    )
}
export default PropirtiesProvider