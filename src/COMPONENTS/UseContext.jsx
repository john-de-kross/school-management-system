import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);


export const AppProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const values = {
        isOpen,
        setIsOpen
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )


}

export const UseAppContext = () => useContext(AppContext);