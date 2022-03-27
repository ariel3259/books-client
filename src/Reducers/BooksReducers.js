import { BOOKS_TYPES } from "../Actions/BooksActions";

export const BooksReducers = (state, action) => {
    switch(action.type){
        case BOOKS_TYPES.CHANGE_NAME:
            return {...state, name: action.payload};
        case BOOKS_TYPES.CHANGE_DESCRIPTION:
            return {...state, description: action.payload};
        case BOOKS_TYPES.CHANGE_PUBLISHER:
            return {...state, publisher: action.payload};
        case BOOKS_TYPES.CHANGE_PRICE:
            return {...state, price: action.payload};
        default: 
            return state;
    }
}