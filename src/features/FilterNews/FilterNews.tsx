import React, {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
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
    const [stateFilter, setStateFilter] = useState<boolean|undefined>(false)
    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked)
      if(event.target.checked){
          setStateFilter(true)
      }else {
          setStateFilter(false)
      }
    }
    const handleClearFilter = () => {
        Object.keys(queryParameters).map(item=>(
            setQueryParam(item,"")
        ))

      setStateFilter(false)
    }
    const handleStateFilterNull = () => {
      setStateFilter(undefined)
    }


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
                // setValueInput(event.target.value)
            }} value={queryParameters.name} className={cls.Input}
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
                {category.map((item, index) => {
        // console.log(` айтем ${!!queryParameters[item]}`);
        return           <div key={item} className={cls.CheckHeader}>
                            <InputCheckbox  checked={!!queryParameters[item]} nameCheck={item}/>
                            <p>{item}</p>
                        </div>
;
      })}
                    {/*{category.map((item) =>  {*/}
                    {/*    return*/}
                    {/*})}*/}
            </HideBlockFilter>
            <Button onClick={handleClearFilter}>Очистить фильтры</Button>
        </div>
    );
});