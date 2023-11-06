import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {petPageActions} from "../model/slice/petPageSlice";
import cls from "./PetPage.module.scss"
import {Filter} from "../../../features/Filter/Filter";
import {Button} from "../../../shared/ui/Button/Button";
import eye from "../../../shared/assets/icons/eye.svg"
import {useWindowWidth} from "../../../shared/lib/hook/useWindowWidth/useWindowWidth";

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
    const windowWith = useWindowWidth()

    useEffect(() => {
        setTimeout(() => {
            dispatch(petPageActions.setPets([
                {
                    id: 1,
                    name: "Шарик",
                    gender: "man",
                    header:"Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...",
                    headerPhoto:"#В приюте с 13.06.2023",
                    views: 150,
                    photo: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
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
            {petList?.map((pet)=>(
                <div
                    key={pet.id}
                    className={cls.CardPage}
                >
                    <div className={cls.ContainerPhoto}>
                        <img className={cls.PhotoPet} src={pet.photo}/>
                        <p className={cls.HeaderDate}>{pet.headerPhoto}</p>
                    </div>
                    <div className={cls.HeaderCardPet}>{pet.header}</div>
                    <div className={cls.BottomCard}>
                        <Button>Читать далее...</Button>
                        <div className={cls.Views}>
                            <img src={eye}/>
                            <p>{pet.views}</p>
                    </div>

                    </div>
                </div>
            ))}
            {windowWith > 1050 &&
                <Filter/>
            }
            {/*{isLoading*/}
            {/*    ?*/}
            {/*    <>Skeleton</>*/}
            {/*    :*/}
            {/*    <>*/}
            {/*        {petList?.map((pet) => (*/}
            {/*            <div key={pet.id}>*/}
            {/*                {pet.name}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </>*/}
            {/*}*/}
            {children}
        </div>
    );
});
export default PetPage