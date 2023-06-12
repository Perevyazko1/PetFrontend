import {FC, lazy} from "react";

export const UserPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./UserPage")),1500)
}));