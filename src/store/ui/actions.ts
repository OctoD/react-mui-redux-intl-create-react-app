import aar from "redux-aar";

const create = aar.prefix("ui");

export const closeaside = create("closeaside");
export const openaside = create("openaside");
export const toggleaside = create("toggleaside");
