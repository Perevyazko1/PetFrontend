import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./FilterNews.module.scss"
import {InputCheckbox} from "../../shared/ui/InputCheckbox/InputCheckbox";
import {useQueryParams} from "../../shared/hooks/useQueryParams/useQueryParams";
import {GroupRadio} from "../../shared/ui/GroupRadio/GroupRadio";
import {HideBlockFilter} from "../../shared/ui/HideBlockFilter/HideBlockFilter";


interface FilterNewsProps {
    className?: string
    children?: ReactNode
}


export const FilterNews = memo((props: FilterNewsProps) => {

    const [category, setCategory] = useState(["Корм", "Кошки","Собаки", "Воспитание", "Игры", "Прогулка", "Ухаживание"])

    const {setQueryParam, queryParameters, initialLoad} = useQueryParams();
    const [valueInput, setValueInput] = useState<string>(queryParameters.name || '')


    const {
        className,
        children,
        ...otherProps
    } = props
    
    const mods: Mods = {
        
    };
    
    return (
        <div
            className={classNames(cls.FilterNews, mods, [className])}
            {...otherProps}
        >
            <p className={cls.HeaderFilters}>Искать в содержимом статьи:</p>
            <Input onChange={event => {
                setQueryParam("name", event.target.value)
                setValueInput(event.target.value)
            }} value={valueInput} className={cls.Input}
            />
            <div className={cls.TypeFilter}>Сортировать по:</div>
            <HideBlockFilter nameBlock={"Дата"}>
                <GroupRadio decrease={"dateNewsDecrease"} increase={"dateNewsIncrease"}/>
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Количество просмотров"}>
                <GroupRadio decrease={"SummViewNewsDecrease"} increase={"SummViewNewsIncrease"}/>
            </HideBlockFilter>

            <div className={cls.TypeFilter}>Отфлиртовать по:</div>
            <HideBlockFilter nameBlock={"Дата"}>
                <div className={cls.BlockInput}>
                    <p>От</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"date"}/>
                    <p>До</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"date"}/>
                </div>
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Категория"}>
                    {category.map(item => (
                        <div key={item} className={cls.CheckHeader}>
                            <InputCheckbox nameCheck={item}/>
                            <p >{item}</p>
                        </div>
                    ))}
            </HideBlockFilter>
        </div>
    );
});