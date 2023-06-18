import {memo, ReactNode, ButtonHTMLAttributes} from 'react';

import {classNames, Mods} from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "btn-enable" | "btn-disable"
    className?: string
    children?: ReactNode
}


export const Button = memo((props: ButtonProps) => {
    const {
        color = "btn-enable",
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.btnEnable]: color === "btn-enable",
        [cls.btnDisable]: color === "btn-disable",
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