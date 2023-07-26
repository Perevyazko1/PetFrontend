import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./RandomPhotoPet.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import paw from "../../../shared/assets/icons/PawLogo.svg"
import bone from "../../../shared/assets/icons/BigBone.svg"

interface RandomPhotoPetProps {
    className?: string
    children?: ReactNode
}


export const DetailsRandomPhotoPet = memo((props: RandomPhotoPetProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <ContentWrapper>
            <div
                className={classNames(cls.RandomPhotoPet, mods, [className])}
                {...otherProps}
            >
                <img src={paw} className={cls.FirstPaw}/>
                <p className={cls.LogoRandomPhoto}>Фото</p>
                <img src={paw} className={cls.SecondPaw}/>
                <div className={cls.PhotoSlider}>
                </div>
                <img src={bone} className={cls.MiniBone}/>
                {children}
            </div>
        </ContentWrapper>
    );
});