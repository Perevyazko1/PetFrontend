import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./RandomPhotoPet.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

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
                {children}
            </div>
        </ContentWrapper>
    );
});