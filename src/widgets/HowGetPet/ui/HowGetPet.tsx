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
                <div className={cls.AllSteps}>
                    <div className={cls.UnitStep} >
                        <div className={cls.StepNumbers} >1</div>
                        <div className={cls.StepText}>Выберите животное на сайте, которое Вам понравилось</div>
                    </div>
                    <div className={cls.UnitStep} >
                        <div className={cls.StepNumbers} >2</div>
                        <div className={cls.StepText}>Заполните специальную форму</div>
                    </div>
                    <div className={cls.UnitStep} >
                        <div className={cls.StepNumbers} >3</div>
                        <div className={cls.StepText}>Ожидайте звонка от нашего волонтера</div>
                    </div>
                    <div className={cls.UnitStep} >
                        <div className={cls.StepNumbers} >4</div>
                        <div className={cls.StepText}>Получайте своего нового друга</div>
                    </div>
                </div>
                <div className={cls.buttonGroup}>
                    <Button className={cls.Button}>Приютить</Button>
                </div>

                <img src={bone} className={cls.AverageBone}/>
            </div>
        </ContentWrapper>
    );
});