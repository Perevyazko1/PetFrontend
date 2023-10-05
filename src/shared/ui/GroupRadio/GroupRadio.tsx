import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./GroupRadio.module.scss"
import {InputRadio} from "../InputRadio/InputRadio";
import {useQueryParams} from "../../hooks/useQueryParams/useQueryParams";

interface GroupRadioProps {
    className?: string
    children?: ReactNode
    increase: string
    decrease: string
}


export const GroupRadio = memo((props: GroupRadioProps) => {

    const {
        className,
        children,
        increase,
        decrease,
        ...otherProps
    } = props


      const {setQueryParam, queryParameters, initialLoad} = useQueryParams();
      const [isIncreasing, setIsIncreasing] = useState(true);
      const [isDecreasing, setIsDecreasing] = useState(false);

      const handleIncreaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsIncreasing(true);
        setIsDecreasing(false);
        setQueryParam(increase, event.target.value);
        setQueryParam(decrease, "");
      };

      const handleDecreaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDecreasing(true);
        setIsIncreasing(false);
        setQueryParam(decrease, event.target.value);
        setQueryParam(increase, "");
      };




    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.GroupRadio, mods, [className])}
            {...otherProps}
        >
            <div className={cls.CheckHeader}>
                <InputRadio
                    checked={isIncreasing}
                    onChange={handleIncreaseChange}
                />
                <p>По возрастанию</p>
            </div>
            <div className={cls.CheckHeader}>
               <InputRadio
                checked={isDecreasing}
                   onChange={handleDecreaseChange}
               />
                <p>По убыванию</p>
            </div>
        </div>
    );
});