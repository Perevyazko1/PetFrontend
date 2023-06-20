import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./HowGetPet.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

interface HowGetPetProps {
    className?: string
    children?: ReactNode
}


export const DetailsHowGetPet = memo((props: HowGetPetProps) => {
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
                className={classNames(cls.HowGetPet, mods, [className])}
                {...otherProps}
            >
                {children}
            </div>
        </ContentWrapper>
    );
});