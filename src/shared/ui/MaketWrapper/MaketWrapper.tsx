import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MaketWrapper.module.scss"

interface MaketWrapperProps {
    className?: string
    children?: ReactNode
}


export const MaketWrapper = memo((props: MaketWrapperProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props



    return (
        <div
            className={classNames(cls.MaketWrapper)}
            {...otherProps}
        >
            {children}
        </div>
    );
});