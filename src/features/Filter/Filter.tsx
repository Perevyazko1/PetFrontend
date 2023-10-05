import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./Filter.module.scss"
import {InputCheckbox} from "../../shared/ui/InputCheckbox/InputCheckbox";
import {GroupRadio} from "../../shared/ui/GroupRadio/GroupRadio";
import {HideBlockFilter} from "../../shared/ui/HideBlockFilter/HideBlockFilter";

interface FilterProps {
    className?: string
    children?: ReactNode
}


export const Filter = memo((props: FilterProps) => {

    const [arrayTypePet ,SetArrayTypePet] = useState(["Кошка","Собака","Все"])
    const [arrayBreed ,SetArrayBreed] = useState(["Терьер","Мэйнкун"])
    const [arrayColor ,SetArrayColor] = useState(["Белый","Палевый","Рыжий","Светлый","Тигровый","Темный","Все"])
    const [arraySize ,SetArraySize] = useState(["Крупный","Маленький","Небольшой","Средний","Все"])

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
                        <InputCheckbox/>
                        <p>{type}</p>
                    </div>
                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Порода"}>
                    {arrayBreed.map(breedPet=>(
                   <div key={breedPet} className={cls.CheckHeader}>
                        <InputCheckbox/>
                        <p>{breedPet}</p>
                    </div>

                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Окрас"}>
                    {arrayColor.map(colorAnimal =>(
                        <div key={colorAnimal} className={cls.CheckHeader}>
                            <InputCheckbox/>
                            <p>{colorAnimal}</p>
                        </div>
                    ))}
            </HideBlockFilter>
            <HideBlockFilter nameBlock={"Размер"}>
                    {arraySize.map(sizeAnimal=>(
                        <div key={sizeAnimal} className={cls.CheckHeader}>
                            <InputCheckbox/>
                            <p>{sizeAnimal}</p>
                        </div>
                    ))}
            </HideBlockFilter>
        </div>
    );
});