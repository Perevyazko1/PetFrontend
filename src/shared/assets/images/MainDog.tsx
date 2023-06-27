import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainDog.module.scss"

export enum MainDogs {
    FIRSTCORGI = "./././pages/MainPage/ui/MainPage/FirstCorgi.png",
}


interface MainDogProps {
    firstCorgi?: boolean
    src: MainDogs
    // dogAndCat?: boolean
    // secondCorgi?: boolean
    // mops?: boolean
    className?: string
    children?: ReactNode
}


export const MainDog = memo((props: MainDogProps) => {
    const {
        firstCorgi = false,
        src,
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.FirstCorgi]: firstCorgi,
    };

    return (
        <img
            className={classNames(cls, mods, [className])}
            {...otherProps}
        >
            {children}
        </img>
    );
});