import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./Filter.module.scss"
import chevronDown from "../../shared/assets/icons/ChevronDown.svg"

interface FilterProps {
    className?: string
    children?: ReactNode
}


export const Filter = memo((props: FilterProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    
    const mods: Mods = {
        
    };
    
    return (
        <div
            className={classNames(cls.Filter, mods, [className])}
            {...otherProps}
        >
            <p>Искать в содержимом статьи:</p>
            <Input/>
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Дата приема</p>
                <img src={chevronDown}/>
            </div>

            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>По возрастанию</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>По убыванию</p>
            </div>
            <div className={cls.CheckHeader}>
                <p>Количество просмотров </p>
                <img src={chevronDown}/>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>По возрастанию</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>По убыванию</p>
            </div>

            <p>Отфлиртовать по:</p>
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Возрасту</p>
                <img src={chevronDown}/>
            </div>


            <p>От</p>
            {/*<Input>--</Input>*/}
            <p>До</p>
            {/*<Input>--</Input>*/}
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>По возрастанию</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>По убыванию</p>
            </div>

            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Вид животного</p>
                <img src={chevronDown}/>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Кошка</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>Собака</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Все</p>
            </div>


            <div className={cls.CheckHeader}>
                <p className={cls.CheckHeader}>Порода</p>
                <img src={chevronDown}/>
            </div>


            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Окрас</p>
                <img src={chevronDown}/>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Белый</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Палевый</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>Рыжий</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Светлый</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Тигровый</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Темный</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Все</p>
            </div>



            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Размер</p>
                <img src={chevronDown}/>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Крупный</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Маленький</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Небольшой</p>
            </div>
            <div className={cls.CheckHeader}>
               <Input type={"checkbox"}/>
                <p>Средний</p>
            </div>
            <div className={cls.CheckHeader}>
                <Input type={"checkbox"}/>
                <p>Все</p>
            </div>
        </div>
    );
});