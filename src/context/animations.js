import React, { createContext, useState } from 'react'
const AnimationsContext = createContext(null)

function AnimationsContextProvider({children}) {
    const [animationsOn, setAnimationsOn] = useState(true)
    console.log(animationsOn)
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
