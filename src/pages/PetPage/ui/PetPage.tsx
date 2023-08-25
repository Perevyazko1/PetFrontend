import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {petPageActions} from "../model/slice/petPageSlice";
import cls from "./PetPage.module.scss"
import {Filter} from "../../../features/Filter/Filter";

interface PetPageProps {
    className?: string
    children?: ReactNode
}


const PetPage = memo((props: PetPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(petPageActions.setPets([
                {
                    id: 1,
                    name: "Шарик",
                    gender: "man",
                }
            ]))
        }, 1000)
    }, [])
// TODO удалить задержку загрузки в прод

    const petList = useAppSelector(state => state.petPage.pets);
    const isLoading = useAppSelector(state => state.petPage.pageIsLoading);


    const mods: Mods = {};

    return (
        <div
            className={classNames(cls.PetPage, mods, [className])}
            {...otherProps}
        >
            <h1>Страница Животного</h1>
            <Filter/>
            {isLoading
                ?
                <>Skeleton</>
                :
                <>
                    {petList?.map((pet) => (
                        <div key={pet.id}>
                            {pet.name}
                        </div>
                    ))}
                </>
            }
            {children}
        </div>
    );
});
export default PetPage