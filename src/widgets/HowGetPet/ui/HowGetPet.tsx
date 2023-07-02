import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./HowGetPet.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import paw from "../../../shared/assets/icons/PawLogo.svg"
import bone from "../../../shared/assets/icons/BigBone.svg"


interface HowGetPetProps {
    className?: string
    children?: ReactNode
}


export const DetailsHowGetPet = memo((props: HowGetPetProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <ContentWrapper>
            <div
                className={classNames(cls.HowGetPet, mods, [className])}
                {...otherProps}
            >
                <img src={paw} className={cls.Paw}/>
                <p className={cls.LogoHowGet}>Как забрать нового друга?</p>
                <img src={bone} className={cls.BigBone}/>
                <img src={bone} className={cls.MiniBone}/>
                <span className={cls.StepNumbers}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </span>
                <span className={cls.StepText}>
                    <span className={cls.Text}>Выберите животное на сайте, которое Вам понравилось</span>
                    <span className={cls.Text}>Заполните специальную форму</span>
                    <span className={cls.Text}>Ожидайте звонка от нашего волонтера</span>
                    <span className={cls.Text}>Получайте своего нового друга</span>
                </span>
                <Button className={cls.Button}>Приютить</Button>
                <img src={bone} className={cls.AverageBone}/>
            </div>
        </ContentWrapper>
    );
});