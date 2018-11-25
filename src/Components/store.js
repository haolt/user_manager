import { noteData } from './FirebaseConnect';
var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {}
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            // console.log('Connect with ADD_DATA Successfully' + action.storeItem );
            noteData.push(action.storeItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state, isEdit: !state.isEdit}
        case 'GET_EDIT_ITEM':
            // console.log(action.editItem);
            return {...state, editItem: action.editItem}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()))
})

export default store;