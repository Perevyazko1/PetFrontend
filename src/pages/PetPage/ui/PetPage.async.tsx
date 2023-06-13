import {FC, lazy, Suspense} from "react";
import AnimationLoader from "../../../features/animation_loader/AnimationLoader";
// TODO удалить задержку загрузки в прод
export const PetPageAsync = lazy<FC>(() => new Promise(resolve => {
    setTimeout(() => resolve(import("./PetPage")),1500)
}));

export const DetailPetComponent = () => (
  <Suspense fallback={<AnimationLoader/>}>
    <PetPageAsync />
  </Suspense>
)