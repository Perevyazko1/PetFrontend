import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./FilterNews.module.scss"
import chevronDown from "../../shared/assets/icons/ChevronDown.svg"
import chevronUp from "../../shared/assets/icons/chevronUp.svg"
import {InputCheckbox} from "../../shared/ui/InputCheckbox/InputCheckbox";
import {InputRadio} from "../../shared/ui/InputRadio/InputRadio";

interface FilterNewsProps {
    className?: string
    children?: ReactNode
}


export const FilterNews = memo((props: FilterNewsProps) => {

    const [category, setCategory] = useState(["Корм", "Кошки","Собаки", "Воспитание", "Игры", "Прогулка", "Ухаживание"])
    const [dateReceipt, SetDateReceipt] = useState(false)
    const [iconDateReceipt, SetIconDateReceipt] = useState(chevronDown)

    const [summViews, SetSummViews] = useState(false)
    const [iconSummViews, SetIconSummViews] = useState(chevronDown)

    const [age, SetAge] = useState(false)
    const [iconAge, SetIconAge] = useState(chevronDown)

    const [typeAnimal, SetTypeAnimal] = useState(false)
    const [iconTypeAnimal, SetIconTypeAnimal] = useState(chevronDown)



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
            <Input className={cls.Input}/>
            <div className={cls.TypeFilter}>Сортировать по:</div>
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Дате</p>
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
                <p className={cls.HeaderFilters}>Дате</p>
                <img onClick={handleAge} src={iconAge}/>
            </div>
            {age &&
            <div>
                <div className={cls.BlockInput}>
                    <p>От</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"date"}/>
                    <p>До</p>
                    <Input className={cls.UnitInput} placeholder={"   — —"} type={"date"}/>
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
                <p className={cls.HeaderFilters}>Категории</p>
                <img onClick={handleTypeAnimal} src={iconTypeAnimal}/>
            </div>
            {typeAnimal &&

                <div>

                    {category.map(item => (
                        <div className={cls.CheckHeader}>
                            <InputCheckbox/>
                            <p key={item}>{item}</p>
                        </div>
                    ))}
                </div>
            }



        </div>
    );
});