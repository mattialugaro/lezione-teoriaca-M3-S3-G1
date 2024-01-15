//src/reducers/userRecucer.js
const userReducer = (state = {user:null}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {user:action.payload};
        case 'CLEAR_USER':
            return {user:null};
        default:
            return state;
    }
};

export default userReducer;