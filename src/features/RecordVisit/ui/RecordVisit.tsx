import {memo, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./RecordVisit.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import bone from "../../../shared/assets/icons/BigBone.svg"
import paw from "../../../shared/assets/icons/PawLogo.svg"
import dog from "../../../shared/assets/images/SecondCorgi.png"
import {Input} from "../../../shared/ui/Input/Input";

interface RecordVisitProps {
    className?: string
    children?: ReactNode
}


export const DetailsRecordVisit = memo((props: RecordVisitProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <ContentWrapper>
            <div
                className={classNames(cls.RecordVisit)}
                {...otherProps}
            >
                <img className={cls.Paw} src={paw}/>
                <p className={cls.LogoRecord}>Записаться на посещение</p>
                <p className={cls.Instruction}>
                    Заполните форму ниже и наш менеджер свяжется с Вами,
                    чтобы договориться о времени посещения
                </p>
                <img className={cls.BigBone} src={bone}/>
                <img className={cls.MiniBone} src={bone}/>
                <img className={cls.Dog} src={dog}/>
                <Input type={"text"} placeholder={"Ваше имя"}/>
                <Input type={"tel"} placeholder={"Ваш телефон"}/>
                <Input type={"email"} placeholder={"Ваш e-mail"}/><Button>Отправить</Button>
            </div>
        </ContentWrapper>
    );
});