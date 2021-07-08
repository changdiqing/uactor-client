import { UACTORS_FETCH_STARTED, UACTORS_FETCH_SUCCESS, UACTORS_FETCH_FAIL } from "./reduxConstants";

const initialState = {
    loading: true,
    uActors: [],
    errMsg: null,
};
function uActorReducer(state = initialState, action) {
    switch (action.type) {
        case UACTORS_FETCH_STARTED:
            console.log("dispatching UACTORS_FETCH_STARTED");
            return { ...state, loading: true, uActors: [], errMsg: null };
        case UACTORS_FETCH_SUCCESS:
            console.log("this is the action payload");
            console.log(action.payload[0]);
            return { ...state, loading: false, uActors: action.payload, errMsg: null };
        case UACTORS_FETCH_FAIL:
            return { ...state, loading: false, uActors: [], errMsg: action.payload };
        default:
            return state;
    }
}

export { uActorReducer };
