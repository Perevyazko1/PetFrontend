import {memo, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Home.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import firstDog from "../../../shared/assets/images/FirstCorgi.png"
import {Button} from "../../../shared/ui/Button/Button";
import bigBone from "../../../shared/assets/icons/BigBone.svg"
import logo from "../../../shared/assets/icons/PawLogo.svg"

interface HomeProps {
    className?: string
    children?: ReactNode
}


export const Home = memo((props: HomeProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <ContentWrapper>
            <div
                className={classNames(cls.Home)}
                {...otherProps}
            >
                <img className={cls.BigBone} src={bigBone}/>
                <img className={cls.MiniBone} src={bigBone}/>

                <p className={cls.BigText}>Твой новый друг в приюте
                    <span className={cls.LogoText}>
                        ЛАПКИ
                        <img src={logo} className={cls.Logo}/>
                    </span>
                </p>
                <p className={cls.SmallText}>Подари новую жизнь питомцу, у нас найдешь себе лучшего друга</p>
                <div className={cls.buttonGroup}>
                    <Button className={cls.LefButton}>
                        Приютить
                    </Button>
                    <Button className={cls.RightButton}>
                        Пожертвовать
                    </Button>
                </div>

                <img className={cls.Dog} src={firstDog}/>
            </div>
        </ContentWrapper>
    );
});