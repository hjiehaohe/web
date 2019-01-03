
export const APP_LIST = 'app/LIST';

const initialState = {
    appAuthenticated: (localStorage.u) ? true : false,
    appProfile: (localStorage.u) ? JSON.parse(localStorage.u) : {},
    appData: [],
    appNav: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_LIST:
            return {
                ...state,
                appData: action.payload
            };
        default:
            return state;

    }
};