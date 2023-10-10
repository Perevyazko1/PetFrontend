import React, {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./Filter.module.scss"
import {InputCheckbox} from "../../shared/ui/InputCheckbox/InputCheckbox";
import {GroupRadio} from "../../shared/ui/GroupRadio/GroupRadio";
import {HideBlockFilter} from "../../shared/ui/HideBlockFilter/HideBlockFilter";
import {Button} from "../../shared/ui/Button/Button";
import {useQueryParams} from "../../shared/hooks/useQueryParams/useQueryParams";

interface FilterProps {
    className?: string
    children?: ReactNode
}


export const Filter = memo((props: FilterProps) => {

    const [arrayTypePet ,SetArrayTypePet] = useState(["Кошка","Собака","Все"])
    const [arrayBreed ,SetArrayBreed] = useState(["Терьер","Мэйнкун"])
    const [arrayColor ,SetArrayColor] = useState(["Белый","Палевый","Рыжий","Светлый","Тигровый","Темный","Все"])
    const [arraySize ,SetArraySize] = useState(["Крупный","Маленький","Небольшой","Средний","Все"])

    const {setQueryParam, queryParameters, initialLoad} = useQueryParams();
    const [stateFilter, setStateFilter] = useState<boolean|undefined>(false)


        const handleClearFilter = () => {
        Object.keys(queryParameters).map(item=>(
            setQueryParam(item,"")
        ))

      setStateFilter(false)
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
            className={classNames(cls.Filter, mods, [className])}
            {...otherProps}
        >
            <p className={cls.HeaderFilters}>Искать в содержимом статьи:</p>
            <Input className={cls.Input}/>
            <div className={cls.TypeFilter}>Сортировать по:</div>
            <HideBlockFilter nameBlock={"Дата приема"}>
                <GroupRadio decrease={"dateReceiptDecrease"} increase={"dateReceiptIncrease"}/>
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Количество просмотров"}>
                <GroupRadio decrease={"summViewsPostPetDecrease"} increase={"summViewsPostPetIncrease"}/>
            </HideBlockFilter>
            <div className={cls.TypeFilter}>Отфлиртовать по:</div>
            <HideBlockFilter nameBlock={"Возрасту"}>
                <div className={cls.BlockInput}>
                    <p>От</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"number"}/>
                    <p>До</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"number"}/>
                </div>
                <GroupRadio decrease={"AgePetDecrease"} increase={"AgePetIncrease"}/>
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Вид животного"}>
                    {arrayTypePet.map(type=>(
                   <div key={type} className={cls.CheckHeader}>
                        <InputCheckbox checked={!!queryParameters[type]} nameCheck={type}/>
                        <p>{type}</p>
                    </div>
                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Порода"}>
                    {arrayBreed.map(breedPet=>(
                   <div key={breedPet} className={cls.CheckHeader}>
                        <InputCheckbox checked={!!queryParameters[breedPet]} nameCheck={breedPet}/>
                        <p>{breedPet}</p>
                    </div>

                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Окрас"}>
                    {arrayColor.map(colorAnimal =>(
                        <div key={colorAnimal} className={cls.CheckHeader}>
                            <InputCheckbox checked={!!queryParameters[colorAnimal]} nameCheck={colorAnimal}/>
                            <p>{colorAnimal}</p>
                        </div>
                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Размер"}>
                    {arraySize.map(sizeAnimal=>(
                        <div key={sizeAnimal} className={cls.CheckHeader}>
                            <InputCheckbox checked={!!queryParameters[sizeAnimal]} nameCheck={sizeAnimal}/>
                            <p>{sizeAnimal}</p>
                        </div>
                    ))}
            </HideBlockFilter>
            <Button onClick={handleClearFilter}>Очистить фильтры</Button>

        </div>
    );
});