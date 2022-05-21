import { types } from '../types/types'


export const initialState = {
    offers: [],
    idOffer: ""
}

const offersReducers = ( state= {}, action) => {

    switch( action.type) {

        case types.removeOffer: 
            return {
                offers: state.offers.filter( offer => {
                    return offer.id !== action.payload
                })
            }

        case types.addOffer:
            return {
                offers: [ action.payload, ...state.offers]
            }

        case types.editOffer:
            
            const updateOffer = action.payload;
            const updateOffers = state.offers.map(offer => {
                if(offer.id === updateOffer.id ){
                    return updateOffer;
                }
                return offer;
            })

            return {
                offers: updateOffers
            }

        default:
            return state;

    }
}

export default offersReducers;