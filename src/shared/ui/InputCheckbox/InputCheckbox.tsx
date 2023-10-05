import {InputHTMLAttributes, memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./InputCheckbox.module.scss"
import check from "../../assets/icons/check.svg"

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
        <label className={cls.CustomCheckbox}>
            <input type={"checkbox"}
                className={classNames("", mods, [className])}
                {...otherProps}/>
            <span className={cls.Checkmark}></span>
        </label>
    );
});