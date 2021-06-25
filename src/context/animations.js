import React, { createContext, useState } from 'react'
const AnimationsContext = createContext(null)

function AnimationsContextProvider({children}) {
    const [animationsOn, setAnimationsOn] = useState(true)
    function toggleAnimations() {
        setAnimationsOn(!animationsOn)
    }
    return (
        <AnimationsContext.Provider value={{animationsOn, toggleAnimations}}>
            {children}
        </AnimationsContext.Provider>
    )
}

export {AnimationsContextProvider, AnimationsContext}
