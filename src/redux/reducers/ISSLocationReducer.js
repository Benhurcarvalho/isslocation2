import { REQUEST_ISS, REQUEST_ISS_ERROR, REQUEST_ISS_SUCCESS } from "../actions";

const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
    errorMenssage: null,
    isLoading: false,
}

const ISSLocationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_ISS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case REQUEST_ISS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            }
        }
        case REQUEST_ISS_ERROR: {
            return {
                ...state,
                isLoading: false,
                errorMenssage: action.payload.error.message || 'Deu ruim'
            }
        }
        default: return state;
    }
};

export default ISSLocationReducer;