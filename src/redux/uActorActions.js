import { UACTORS_FETCH_STARTED, UACTORS_FETCH_SUCCESS, UACTORS_FETCH_FAIL } from "./reduxConstants";
import UActorService from "../services/UActorService";

const fetchUActors = () => async (dispatch) => {
    dispatch({ type: UACTORS_FETCH_STARTED });
    UActorService.getUActors()
        .then((data) => {
            console.log("redux fetch uActors succeeded");
            console.log(data);
            dispatch({ type: UACTORS_FETCH_SUCCESS, payload: data });
        })
        .catch((err) => {
            console.log("redux fetch uActors failed");
            console.log(err);
            dispatch({ type: UACTORS_FETCH_FAIL, payload: err.message });
        });
};

export { fetchUActors };
