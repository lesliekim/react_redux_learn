import { CLICKED } from "./actionTypes";

export const clickButton = (id) => (
    {
        type: CLICKED,
        id: parseInt(id,10)
    }
);
