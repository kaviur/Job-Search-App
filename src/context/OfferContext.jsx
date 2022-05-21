import React, { createContext, useReducer} from 'react'
import offersReducer, { initialState } from '../reducers/offersReducer'
import { types } from '../types/types'



//create Context
export const offerCont = createContext( )

export const OfferContext = ({ children }) => {

    const [state, dispatch] = useReducer(offersReducer, initialState)


    //actions
    const removeOffer = (id) => {
        dispatch({
            type: types.removeOffer,
            payload: id
        })
    }

    const addOffer = (offer) => {
        dispatch({
            type: types.addOffer,
            payload: offer
        })
    }


    const editOffer = (offer) => {
        dispatch({
            type: types.editOffer,
            payload: offer
        })
    }
 
    return <offerCont.Provider value={{
        offers: state.offers,
        removeOffer,
        addOffer,
        editOffer,
      }}>
        { children }
    </offerCont.Provider>
}

