const getBoards = () => {      
    const boards = JSON.parse(localStorage.getItem('boards'));

    return boards ? boards : [];
}

export default getBoards;