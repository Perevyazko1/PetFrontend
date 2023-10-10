import {InputHTMLAttributes, memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./InputCheckbox.module.scss"
import {useQueryParams} from "../../hooks/useQueryParams/useQueryParams";

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
    children?: ReactNode
    nameCheck: string
}


export const InputCheckbox = memo((props: InputCheckboxProps) => {

    const {setQueryParam, queryParameters, initialLoad} = useQueryParams();
    const [isChecked, setIsChecked] = useState(false);



    const {
        className,
        children,
        nameCheck,
        ...otherProps
    } = props
      const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        if (!queryParameters[nameCheck] && event.target.value){
            setIsChecked(true);
            setQueryParam(nameCheck, event.target.value);
        }else {
            setIsChecked(false);
            setQueryParam(nameCheck, "");
        }
      };


    const mods: Mods = {

    };

    return (
        <label className={cls.CustomCheckbox}>
            <input type={"checkbox"}
               // checked={isChecked}
               onChange={handleCheckChange}
                className={classNames("", mods, [className])}
                {...otherProps}/>
            <span className={cls.Checkmark}></span>
        </label>
    );
});