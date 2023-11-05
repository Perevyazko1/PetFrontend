import {FC, lazy, Suspense} from "react";
import {AnimationLoader} from "../../../shared/ui/AnimationLoader/AnimationLoader";
// TODO удалить задержку загрузки в прод
export const NewsPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./NewsPage")),1500)
}));

export const DetailsNewsComponent = () => (
  <Suspense fallback={<AnimationLoader/>}>
    <NewsPageAsync />
  </Suspense>
)