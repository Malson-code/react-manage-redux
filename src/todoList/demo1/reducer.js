import {
    ADD_NUM,
    REDUCE_NUM
} from './actionTypes';

//页面基础state 某种意义上来说是存放在store的state
const initialState = {
    baseNum: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NUM:
            const { payload } = action;
            let baseNum = state.baseNum + payload;
            return { ...state, ...{ baseNum } };
        case REDUCE_NUM:
            return { ...state, ...{ baseNum:state.baseNum  - 1 } };
        default:
            return state;
    }
}