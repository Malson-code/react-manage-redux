import {
    ADD_NUM,
    REDUCE_NUM
} from './actionTypes';

//新增
export const addNum = payload => {
    return dispatch => {
        dispatch(
            {
                type:ADD_NUM,
                payload
            }
        )
    }
};

//减少
export const reduceNum = ()=>{
    return dispatch => {
        dispatch(
            {
                type:REDUCE_NUM,
            }
        )
    }
};