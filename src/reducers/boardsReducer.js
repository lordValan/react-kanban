import { BOARDS } from '../constants';

const boardsReducer = (state = [], action) => {
    let newState = [...state];

    switch(action.type) {
        case BOARDS.FETCH_BOARDS:
            newState = action.boards;
            break;
        case BOARDS.ADD_NEW_BOARD: 
            newState.push(action.board);
            break;
        default:
            break;
    }

    return newState;
};

export default boardsReducer;