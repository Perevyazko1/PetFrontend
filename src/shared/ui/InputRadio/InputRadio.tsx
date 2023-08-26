import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./InputRadio.module.scss"

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
    children?: ReactNode
}


export const InputRadio = memo((props: InputRadioProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <input type={"radio"}
            className={classNames(cls.InputRadio, mods, [className])}
            {...otherProps}
        >
            {children}
        </input>
    );
});