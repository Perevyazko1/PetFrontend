import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./PageWrapperMobile.module.scss"

interface PageWrapperMobileProps {
    className?: string
    children?: ReactNode
}


export const PageWrapperMobile = memo((props: PageWrapperMobileProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.PageWrapperMobile, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});