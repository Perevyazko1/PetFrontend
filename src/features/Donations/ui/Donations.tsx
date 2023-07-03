import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Donations.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import dog from "../../../shared/assets/images/Mops.png"
import paw from "../../../shared/assets/icons/PawLogo.svg"
import visa from "../../../shared/assets/images/Visa.png"
import backVisa from "../../../shared/assets/images/BackVisa.png"
import bone from "../../../shared/assets/icons/BigBone.svg"
import {Input} from "../../../shared/ui/Input/Input";

interface DonationsProps {
    className?: string
    children?: ReactNode
}


export const DetailsDonations = memo((props: DonationsProps) => {
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
                className={classNames(cls.Donations, mods, [className])}
                {...otherProps}
            >
                <img src={paw} className={cls.Paw}/>
                <p className={cls.LogoDonations}>Пожертвования</p>
                <img src={bone} className={cls.MiniBone}/>
                <p className={cls.FirstParagraph}>Вместе мы можем сделать жизнь подопечных приюта лучше.</p>
                <p className={cls.SecondParagraph}>Выберите сумму пожертвования</p>
                <span className={cls.SelectDonations}>
                    <Button className={cls.ButtonDonat}>300₽</Button>
                    <Button className={cls.ButtonDonat}>500₽</Button>
                    <Button className={cls.ButtonDonat}>1000₽</Button>
                    <Button className={cls.ButtonDonat}>Другая сумма</Button>
                    <Button className={cls.ButtonDonat}>Пожертвовать</Button>
                </span>
                <img src={backVisa} className={cls.BackVisa}/>
                <img src={visa} className={cls.Visa}/>
                <img src={paw} className={cls.SecondPaw}/>
                <img src={dog} className={cls.Dog}/>
                <Input className={cls.NumberCard} type={"number"} placeholder={"0000 0000 0000 0000"}/>
                <Input className={cls.MonthCard} type={"number"} placeholder={"MM"}/>
                <Input className={cls.YearCard} type={"number"} placeholder={"ГГ"}/>
                <Input className={cls.CvcCard} type={"number"} placeholder={"000"}/>

            </div>
        </ContentWrapper>
    );
});