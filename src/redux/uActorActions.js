import {
    UACTORS_CREATE_STARTED,
    UACTORS_CREATE_SUCCESS,
    UACTORS_CREATE_FAIL,
    UACTORS_FETCH_STARTED,
    UACTORS_FETCH_SUCCESS,
    UACTORS_FETCH_FAIL,
    UACTORS_REMOVE_SUCCESS,
    UACTORS_REMOVE_STARTED,
    UACTORS_REMOVE_FAIL,
} from "./reduxConstants";
import UActorService from "../services/UActorService";

const createUActor = (uactor) => async (dispatch) => {
    dispatch({ type: UACTORS_CREATE_STARTED });
    UActorService.createUActor(uactor)
        .then((data) => {
            dispatch({ type: UACTORS_CREATE_SUCCESS, payload: data });
        })
        .catch((err) => {
            dispatch({ type: UACTORS_CREATE_FAIL, payload: err.message });
        });
};

const fetchUActors = () => async (dispatch) => {
    dispatch({ type: UACTORS_FETCH_STARTED });
    UActorService.getUActors()
        .then((data) => {
            dispatch({ type: UACTORS_FETCH_SUCCESS, payload: data });
        })
        .catch((err) => {
            dispatch({ type: UACTORS_FETCH_FAIL, payload: err.message });
        });
};

const removeUActor = (pid) => async (dispatch) => {
    dispatch({ type: UACTORS_REMOVE_STARTED });
    UActorService.removeUActor(pid)
        .then((data) => {
            dispatch({ type: UACTORS_REMOVE_SUCCESS, payload: data });
        })
        .catch((err) => {
            dispatch({ type: UACTORS_REMOVE_FAIL, payload: err.message });
        });
};

export { createUActor, fetchUActors, removeUActor };
