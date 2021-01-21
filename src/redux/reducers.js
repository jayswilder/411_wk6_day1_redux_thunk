import { combineReducers } from 'redux';

const userInfo = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_USERINFO":
            return action.value
        default: return state
    }
}

const cars = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [...state, action.value]
        case 'REMOVE_CAR':
            const cars = [...state]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const logStatus = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_STATUS":
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({ userInfo, cars, logStatus })