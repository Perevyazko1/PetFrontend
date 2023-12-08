import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./HideBlockFilter.module.scss"
import chevronDown from "../../assets/icons/ChevronDown.svg";
import chevronUp from "../../assets/icons/chevronUp.svg";


interface HideBlockFilterProps {
    className?: string
    children?: ReactNode
    nameBlock: string
}


export const HideBlockFilter = memo((props: HideBlockFilterProps) => {
    const {
        className,
        children,
        nameBlock,
        ...otherProps
    } = props

    const [hideBlock, SetHideBlock] = useState(false)
    const [icon, SetIcon] = useState(chevronDown)

            const handleSummViews =()=>{
        if(icon===chevronDown){

           SetHideBlock(true)
            SetIcon(chevronUp)
        }else {
            SetHideBlock(false)
            SetIcon(chevronDown)
        }

    }



    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.HideBlockFilter, mods, [className])}
            {...otherProps}
        >
            <div onClick={handleSummViews} className={cls.CheckHeader}>
                <p className={cls.HeaderFilters}>{nameBlock}</p>
                <img  src={icon}/>
            </div>
                <div className={hideBlock ? cls.openBlock : cls.hideBlock}>
                    {children}
                </div>
        </div>
    );
});