import {FC, lazy,Suspense} from "react";
import AnimationLoader from "../../../shared/ui/AnimationLoader/AnimationLoader";
// TODO удалить задержку загрузки в прод
// export const MainPageAsync = lazy<FC>(() => import('./MainPage'));
 const MainPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./MainPage")),1500)

}));
export const DetailsMainComponent = () => (
  <Suspense fallback={<AnimationLoader/>}>
    <MainPageAsync />
  </Suspense>
)