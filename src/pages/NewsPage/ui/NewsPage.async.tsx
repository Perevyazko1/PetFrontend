import {FC, lazy} from "react";

export const NewsPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./NewsPage")),1500)
}));