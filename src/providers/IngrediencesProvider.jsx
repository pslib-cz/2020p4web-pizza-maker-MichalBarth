import React from 'react'

export const IngrediencesContext = createcontext();
export const IngrediencesProvider =({children, ...rest}) => {
    //
    return (
        <IngrediencesContext.Provider value = {[/**/]}>
            {children}
        </IngrediencesContext.Provider>
    )
}