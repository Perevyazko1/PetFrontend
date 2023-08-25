import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {Input} from "../../shared/ui/Input/Input";
import cls from "./Filter.module.scss"
import chevronDown from "../../shared/assets/icons/ChevronDown.svg"
import chevronUp from "../../shared/assets/icons/chevronUp.svg"

interface FilterProps {
    className?: string
    children?: ReactNode
}


export const Filter = memo((props: FilterProps) => {


    const [dateReceipt, SetDateReceipt] = useState(false)
    const [iconDateReceipt, SetIconDateReceipt] = useState(chevronDown)

    const [summViews, SetSummViews] = useState(false)
    const [iconSummViews, SetIconSummViews] = useState(chevronDown)

    const [age, SetAge] = useState(false)
    const [iconAge, SetIconAge] = useState(chevronDown)

    const [typeAnimal, Set] = useState()
    const [iconTypeAnimal, SeticonTypeAnimal] = useState(chevronDown)

    const [breed, SetTypeAnimal] = useState()
    const [iconBreed, SeticonBreed] = useState(chevronDown)

    const [color, SetColor] = useState()
    const [iconColor, SeticonColor] = useState(chevronDown)

    const [size, SetSize] = useState()
    const [iconSize, SeticonSize] = useState(chevronDown)


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
                <img onClick={handleDateReceipt} src={iconDateReceipt}/>
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
                <img onClick={handleSummViews} src={iconSummViews}/>
            </div>
            {summViews &&
               <div>
                    <div className={cls.CheckHeader}>
                        <Input type={"checkbox"}/>
                        <p>По возрастанию</p>
                    </div>
                    <div className={cls.CheckHeader}>
                       <Input type={"checkbox"}/>
                        <p>По убыванию</p>
                    </div>
                </div>
            }

            <p>Отфлиртовать по:</p>
            <div className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>Возрасту</p>
                <img onClick={handleAge} src={iconAge}/>
            </div>
            {age &&
            <div>
                <p>От</p>
                {/*<Input>--</Input>*/}
                <p>До</p>
                {/*<Input>--</Input>*/}
            </div>
            }

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