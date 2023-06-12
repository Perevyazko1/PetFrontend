import {FC, lazy} from "react";

export const PetPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./PetPage")),1500)
}));