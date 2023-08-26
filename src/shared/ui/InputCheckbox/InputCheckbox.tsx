import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./InputCheckbox.module.scss"

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
    children?: ReactNode
}


export const InputCheckbox = memo((props: InputCheckboxProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <input type={"checkbox"}
            className={classNames(cls.Checked, mods, [className])}
            {...otherProps}
        >
            {children}
        </input>
    );
});