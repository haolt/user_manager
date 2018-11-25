import { noteData } from './FirebaseConnect';
var redux = require('redux');

const noteInitialState = {
    isEdit: false
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            // console.log('Connect with ADD_DATA Successfully' + action.storeItem );
            noteData.push(action.storeItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state, isEdit: !state.isEdit}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;