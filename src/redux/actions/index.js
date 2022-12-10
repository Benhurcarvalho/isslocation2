import getCurrentISSLocation from "../../services/ISSApi";

// action types
export const REQUEST_ISS = 'REQUEST_ISS';
export const REQUEST_ISS_SUCCESS = 'REQUEST_ISS_SUCCESS';
export const REQUEST_ISS_ERROR = 'REQUEST_ISS_ERROR';


// action creators 
const requestIss = () => ({
    type: REQUEST_ISS,
})

// action creators para para requisição
const responseIssSuccess = ({ iss_position }) => {
    return {
        type: REQUEST_ISS_SUCCESS,
        payload: {
            latitude: +iss_position.latitude,
            longitude: +iss_position.longitude,
        }
    }
}

const responseIssError = (error) => {
    return {
        type: REQUEST_ISS_ERROR,
        payload: {
            error
        }
    }
}




export const fetchISSLocation = () => {
  return async (dispatch) => {
    // 1 aisar q o fetch vai começar 
    dispatch(requestIss);

    try {
        // 2 fazer a requisição de fato 
        const response = await getCurrentISSLocation();
    
        // 3.1 avisar que a requisição foi um sucesso, e entregar a resposta
        dispatch(responseIssSuccess(response))
    } catch (error) {
        // 3.2 avisar que a requisição foi uma falha.
        dispatch(responseIssError(error))
    }
  }
}