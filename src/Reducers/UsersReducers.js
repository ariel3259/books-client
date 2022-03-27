import { USERS_TYPES } from "../Actions/UsersActions";

export default function UsersReducers(state, action){
    switch(action.type){
        case USERS_TYPES.CHANGE_NAME:
            return {...state, name: action.payload};
        case USERS_TYPES.CHANGE_LAST_NAME:
            return {...state, lastName: action.payload};
        case USERS_TYPES.CHANGE_DNI:
            return {...state, dni: action.payload};
        case USERS_TYPES.CHANGE_EMAIL:
            return {...state, email: action.payload};
        case USERS_TYPES.CHANGE_PASSWORD:
            return {...state, password: action.payload};
        default: 
            return state;
    }
}