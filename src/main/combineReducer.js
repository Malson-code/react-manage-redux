/*
    整合所有reducer
    先引入所有模块的reducer 然后统一整合并导出
    import名称即为该模块的state名称
*/
import { combineReducers } from 'redux';

import demo1State from '../todoList/demo1/reducer'

let reducer = {
    demo1State,//demo1模块
};
export default combineReducers(reducer);
