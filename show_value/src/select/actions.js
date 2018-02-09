import { SELECT } from './actionTypes';

export const changeColor = (text) => ({
    type: SELECT,
    color: text
});