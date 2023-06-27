import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

import {classNames, Mods} from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean
    className?: string
    children?: ReactNode
}


export const Button = memo((props: ButtonProps) => {
    const {
        outline = false,
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.outline]: outline,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});