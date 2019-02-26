import { BOARDS } from '../constants';
import { getBoards } from '../utils/api';

const fetchBoards = () => {
    return {
        type: BOARDS.FETCH_BOARDS,
        boards: getBoards()
    }
};

const addNewBoard = (name) => {
    return {
        type: BOARDS.ADD_NEW_BOARD,
        board: {
            name: name
        }
    }
};

export {
    addNewBoard,
    fetchBoards
}