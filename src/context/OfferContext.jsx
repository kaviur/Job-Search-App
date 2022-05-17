import React, { createContext, useReducer} from 'react'
import offersReducer from '../reducers/offersReducer'


const initialState = {
    offers: [
        {
            id:1, 
            title:'prueba',
            description:'bla',
            programming_languages:'react',
            countries:'arg',
            salary:1200,
            english_level:'b2'
        }
    ]
}

//create Context
export const offerCont = createContext( initialState )


export const OfferContext = ({ children }) => {

    const [state, dispatch] = useReducer(offersReducer, initialState)

    return <offerCont.Provider value={{
        offers: state.offers
      }}>
        { children }
    </offerCont.Provider>
}

