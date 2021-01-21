export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const updateUserInfo = (payload) => {
    return {
        type: "UPDATE_USERINFO",
        value: payload
    }
}

export const updateLogStatus = (payload) => {
    return {
        type: "UPDATE_STATUS",
        value: payload
    }
}