import { CHANGE_VALUE } from "./actionTypes";

export const ChangeValue = (text) => ({
    type: CHANGE_VALUE,
    value: text
})