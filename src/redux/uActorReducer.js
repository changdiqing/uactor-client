import {
    UACTORS_CREATE_STARTED,
    UACTORS_CREATE_SUCCESS,
    UACTORS_CREATE_FAIL,
    UACTORS_FETCH_STARTED,
    UACTORS_FETCH_SUCCESS,
    UACTORS_FETCH_FAIL,
    UACTORS_REMOVE_STARTED,
    UACTORS_REMOVE_SUCCESS,
    UACTORS_REMOVE_FAIL,
} from "./reduxConstants";

const initialState = {
    loading: true,
    uActors: [],
    errMsg: null,
};
function uActorReducer(state = initialState, action) {
    switch (action.type) {
        case UACTORS_CREATE_STARTED:
            return { ...state };
        case UACTORS_CREATE_SUCCESS:
            return { ...state, loading: false, uActors: [...state.uActors, action.payload], errMsg: null };
        case UACTORS_CREATE_FAIL:
            return { ...state, loading: false, uActors: [], errMsg: action.payload };
        case UACTORS_FETCH_STARTED:
            return { ...state, loading: true, uActors: [], errMsg: null };
        case UACTORS_FETCH_SUCCESS:
            return { ...state, loading: false, uActors: action.payload, errMsg: null };
        case UACTORS_FETCH_FAIL:
            return { ...state, loading: false, uActors: [], errMsg: action.payload };
        case UACTORS_REMOVE_STARTED:
            // Start removing uActor, do nothing
            return { ...state, loading: false, errMsg: null };
        case UACTORS_REMOVE_SUCCESS:
            let pid = action.payload;
            let newList = state.uActors.filter((x) => {
                return x.pid != pid;
            });
            return { ...state, loading: false, uActors: newList, errMsg: null };
        case UACTORS_REMOVE_FAIL:
            // Failed  removing uActor, display the error message
            return { ...state, loading: false, errMsg: action.payload };
        default:
            return state;
    }
}

export { uActorReducer };
