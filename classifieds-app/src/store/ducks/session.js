//actions
const CLEAR = "/session/CLEAR";
const SET = "session/GET";

const DEFAULT_STATE = null;

// reducer
const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET:
            return action.session;
        case CLEAR:
            return null;
    }
    return state;
};

export default sessionReducer;

// action creators
export const setSession = session => {
    return { session, type: SET };
};

export const clearSession = () => {
    return { type: CLEAR };
};
