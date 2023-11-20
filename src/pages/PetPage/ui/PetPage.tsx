import {memo, ReactNode, useEffect, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {petPageActions} from "../model/slice/petPageSlice";
import cls from "./PetPage.module.scss"
import {Filter} from "../../../features/Filter/Filter";
import {Button} from "../../../shared/ui/Button/Button";
import eye from "../../../shared/assets/icons/eye.svg"
import {useWindowWidth} from "../../../shared/lib/hook/useWindowWidth/useWindowWidth";
import Skeleton from "react-loading-skeleton";

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
    const [isLoadingImg,setIsLoadingImg]=useState(false)

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
                },
                {
                    id: 1,
                    name: "Шарик",
                    gender: "man",
                    header:"Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...",
                    headerPhoto:"#В приюте с 13.06.2023",
                    views: 150,
                    photo: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
                },
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
            <div className={cls.WrapperCards}>
                {petList?.map((pet)=>(
                <div
                    key={pet.id}
                    className={cls.CardPage}
                >
                    {!isLoadingImg && <Skeleton className={cls.ContainerPhoto}/>}
                    <div className={isLoadingImg ?cls.ContainerPhoto:cls.None}>
                        <img
                            className={cls.PhotoPet}
                            src={pet.photo}
                            onLoad={()=> setIsLoadingImg(true)}
                        />
                        <p className={cls.HeaderDate}>{pet.headerPhoto}</p>
                    </div>

                    {!isLoadingImg? <Skeleton className={cls.HeaderCardPet}/>:
                        <div className={cls.HeaderCardPet}>{`${pet.header.slice(0,50)}...`}</div>
                    }
                    {!isLoadingImg? <Skeleton className={cls.BottomCard}/>:
                        <div className={cls.BottomCard}>
                        <Button className={cls.Button}>Читать далее...</Button>
                        <div className={cls.Views}>
                            <img src={eye}/>
                            <p className={cls.NumberViews}>{pet.views}</p>
                    </div>

                    </div>
                    }
                </div>
            ))}
            </div>
            {children}
                        {windowWith > 1140 &&
                <Filter/>
            }

        </div>
    );
});
export default PetPage