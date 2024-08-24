import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider =(props) =>{

    const phone = "2776 932 1017"
    const name = "Chris Mawela"

    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider