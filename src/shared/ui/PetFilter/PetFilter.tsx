import {memo, ReactNode} from 'react';

import {classNames, Mods} from "shared/lib/classNames/classNames";

import cls from "./PetFilter.module.scss"
import {ContentWrapper} from "../ContentWrapper/ContentWrapper";

interface PetFilterProps {
    className?: string
    children?: ReactNode
}


export const PetFilter = memo((props: PetFilterProps) => {
    const {
        className,
        children,
    } = props

    const mods: Mods = {};

    return (
        <ContentWrapper>
            <div
                className={classNames(cls.PetFilter, mods, [className])}
            >
                <h1>Фильтра</h1>
                {children}
            </div>
        </ContentWrapper>
    );
});