import {memo, ReactNode, ButtonHTMLAttributes} from 'react';

import {classNames, Mods} from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "yellow" | "dark"
    className?: string
    children?: ReactNode
}


export const Button = memo((props: ButtonProps) => {
    const {
        color = "yellow",
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.yellow]: color === "yellow",
        [cls.dark]: color === "dark",
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