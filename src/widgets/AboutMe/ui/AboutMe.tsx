import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./AboutMe.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

interface AboutMeProps {
    className?: string
    children?: ReactNode
}


export const AboutMe = memo((props: AboutMeProps) => {
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
                className={classNames(cls.AboutMe, mods, [className])}
                {...otherProps}
            >
                {children}
            </div>
        </ContentWrapper>
    );
});