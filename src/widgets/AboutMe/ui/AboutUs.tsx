import {memo, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AboutUs.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import dogCat from "../../../shared/assets/images/DogAndCat.png"
import paw from "../../../shared/assets/icons/PawLogo.svg"
import bone from "../../../shared/assets/icons/BigBone.svg"

interface AboutMeProps {
    className?: string
    children?: ReactNode
}


export const AboutUs = memo((props: AboutMeProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <ContentWrapper>
            <div
                className={classNames(cls.AboutUs)}
                {...otherProps}
            >
                <img src={paw} className={cls.FirstPaw}/>
                <p className={cls.LogoAbout}>О нас</p>
                <img src={bone} className={cls.BigBone}/>
                <img src={bone} className={cls.MiniBone}/>
                <div className={cls.ContainDogCat}>
                    <img src={dogCat} className={cls.DogCat}/>
                </div>
                <p className={cls.FirstParagraph}>
                    <span className={cls.Quotes}>«Лапки»</span> - это приют, где бездомные животные находят заботу, уход безопасность и надежду на новый дом.
                </p>
                <p className={cls.SecondParagraph}>
                    Наш приют осуществляет свою деятельность на благотворительные пожертвования людей из разных уголков
                    нашей страны. Благодаря этой поддержке мы оплачиваем аренду помещения, закупаем корма и необходимые
                    лекарственные препараты, оплачиваем операции, а также организуем и проводим благотворительные акции
                    и просветительские мероприятия.
                </p>
                <img src={paw} className={cls.SecondPaw}/>
                <p className={cls.ThirdParagraph}>
                    Каждый из вас может помочь нашим подопечным и подарить им немного заботы, любви и теплоты.
                </p>
            </div>
        </ContentWrapper>
    );
});