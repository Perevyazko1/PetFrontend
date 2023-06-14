import {FC, lazy, Suspense} from "react";
import AnimationLoader from "../../../shared/ui/AnimationLoader/AnimationLoader";
// TODO удалить задержку загрузки в прод
export const UserPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./UserPage")),1500)
}));

export const DetailsUserComponent = () => (
  <Suspense fallback={<AnimationLoader/>}>
    <UserPageAsync />
  </Suspense>
)