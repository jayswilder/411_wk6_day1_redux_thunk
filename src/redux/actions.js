const url = "https://cors-anywhere.herokuapp.com/https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}

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