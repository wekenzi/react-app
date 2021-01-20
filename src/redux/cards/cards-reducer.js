const INITIAL_STATE = {
    monsters:[]
}

const cardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CARDS':
            return {
                ...state,
                monsters: action.payload
            };
        default:
            return state;
    }
}

export default cardsReducer;