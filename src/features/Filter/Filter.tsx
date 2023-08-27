import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./Filter.module.scss"
import chevronDown from "../../shared/assets/icons/ChevronDown.svg"
import chevronUp from "../../shared/assets/icons/chevronUp.svg"
import {InputCheckbox} from "../../shared/ui/InputCheckbox/InputCheckbox";
import {InputRadio} from "../../shared/ui/InputRadio/InputRadio";

interface FilterProps {
    className?: string
    children?: ReactNode
}


export const Filter = memo((props: FilterProps) => {

    const [arrayTypePet ,SetArrayTypePet] = useState(["Кошка","Собака","Все"])
    const [arrayBreed ,SetArrayBreed] = useState(["Терьер","Мэйнкун"])
    const [arrayColor ,SetArrayColor] = useState(["Белый","Палевый","Рыжий","Светлый","Тигровый","Темный","Все"])
    const [arraySize ,SetArraySize] = useState(["Крупный","Маленький","Небольшой","Средний","Все"])

    const [dateReceipt, SetDateReceipt] = useState(false)
    const [iconDateReceipt, SetIconDateReceipt] = useState(chevronDown)

    const [summViews, SetSummViews] = useState(false)
    const [iconSummViews, SetIconSummViews] = useState(chevronDown)

    const [age, SetAge] = useState(false)
    const [iconAge, SetIconAge] = useState(chevronDown)

    const [typeAnimal, SetTypeAnimal] = useState(false)
    const [iconTypeAnimal, SetIconTypeAnimal] = useState(chevronDown)

    const [breed, SetBreed] = useState(false)
    const [iconBreed, SetIconBreed] = useState(chevronDown)

    const [color, SetColor] = useState(false)
    const [iconColor, SetIconColor] = useState(chevronDown)

    const [size, SetSize] = useState(false)
    const [iconSize, SetIconSize] = useState(chevronDown)


        const handleDateReceipt =()=>{
        if(iconDateReceipt===chevronDown){

           SetDateReceipt(true)
            SetIconDateReceipt(chevronUp)
        }else {
            SetDateReceipt(false)
            SetIconDateReceipt(chevronDown)
        }

    }


        const handleSummViews =()=>{
        if(iconSummViews===chevronDown){

           SetSummViews(true)
            SetIconSummViews(chevronUp)
        }else {
            SetSummViews(false)
            SetIconSummViews(chevronDown)
        }

    }

        const handleAge =()=>{
            if(iconAge===chevronDown){

               SetAge(true)
                SetIconAge(chevronUp)
            }else {
                SetAge(false)
                SetIconAge(chevronDown)
            }

        }

        const handleTypeAnimal =()=>{
            if(iconTypeAnimal===chevronDown){

               SetTypeAnimal(true)
                SetIconTypeAnimal(chevronUp)
            }else {
                SetTypeAnimal(false)
                SetIconTypeAnimal(chevronDown)
            }

        }

        const handleBreed =()=>{
            if(iconBreed===chevronDown){

               SetBreed(true)
                SetIconBreed(chevronUp)
            }else {
                SetBreed(false)
                SetIconBreed(chevronDown)
            }

        }

        const handleColor =()=>{
            if(iconColor===chevronDown){

               SetColor(true)
                SetIconColor(chevronUp)
            }else {
                SetColor(false)
                SetIconColor(chevronDown)
            }

        }


        const handleSize =()=>{
            if(iconSize===chevronDown){

               SetSize(true)
                SetIconSize(chevronUp)
            }else {
                SetSize(false)
                SetIconSize(chevronDown)
            }

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
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Дата приема</p>
                <img onClick={handleDateReceipt} src={iconDateReceipt}/>
            </div>
            {dateReceipt &&
                <div>
                    <div className={cls.CheckHeader}>
                        <InputRadio/>
                        <p>По возрастанию</p>
                    </div>
                    <div className={cls.CheckHeader}>
                       <InputRadio/>
                        <p>По убыванию</p>
                    </div>
                </div>
            }
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Количество просмотров </p>
                <img onClick={handleSummViews} src={iconSummViews}/>
            </div>
            {summViews &&
               <div>
                    <div className={cls.CheckHeader}>
                        <InputRadio/>
                        <p>По возрастанию</p>
                    </div>
                    <div className={cls.CheckHeader}>
                       <InputRadio/>
                        <p>По убыванию</p>
                    </div>
                </div>
            }

            <div className={cls.TypeFilter}>Отфлиртовать по:</div>
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Возрасту</p>
                <img onClick={handleAge} src={iconAge}/>
            </div>
            {age &&
            <div>
                <div className={cls.BlockInput}>
                    <p>От</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"number"}/>
                    <p>До</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"number"}/>
                </div>

                <div className={cls.CheckHeader}>
                    <InputRadio/>
                    <p>По возрастанию</p>
                </div>
                <div className={cls.CheckHeader}>
                   <InputRadio/>
                    <p>По убыванию</p>
                </div>
            </div>
            }

            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Вид животного</p>
                <img onClick={handleTypeAnimal} src={iconTypeAnimal}/>
            </div>
            {typeAnimal &&
                <div>
                    {arrayTypePet.map(type=>(
                   <div key={type} className={cls.CheckHeader}>
                        <InputCheckbox/>
                        <p>{type}</p>
                    </div>

                    ))}
                </div>
            }


            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Порода</p>
                <img src={iconBreed} onClick={handleBreed}/>
            </div>
            {breed &&
                <div>
                    {arrayBreed.map(breedPet=>(
                   <div key={breedPet} className={cls.CheckHeader}>
                        <InputCheckbox/>
                        <p>{breedPet}</p>
                    </div>

                    ))}
                </div>

            }


            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Окрас</p>
                <img src={iconColor} onClick={handleColor}/>
            </div>
            {color &&
                <div>
                    {arrayColor.map(colorAnimal =>(
                        <div key={colorAnimal} className={cls.CheckHeader}>
                            <InputCheckbox/>
                            <p>{colorAnimal}</p>
                        </div>
                    ))}
                </div>
            }



            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters} >Размер</p>
                <img src={iconSize} onClick={handleSize}/>
            </div>
            {size &&
                <div>
                    {arraySize.map(sizeAnimal=>(
                        <div key={sizeAnimal} className={cls.CheckHeader}>
                            <InputCheckbox/>
                            <p>{sizeAnimal}</p>
                        </div>

                    ))}
                </div>
            }
        </div>
    );
});