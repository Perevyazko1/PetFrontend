import React, {memo} from 'react';
import {ContentWrapper} from "shared/ui/ContentWrapper/ContentWrapper";
import cls from "./NavBar.module.scss"
import {Link, useLocation} from "react-router-dom";
import {routeConfig} from "../../../app/providers/router/config/routeConfig";
import {Button} from "../../../shared/ui/Button/Button";
import {AppRoutes, routeNames} from "../../../shared/consts/routes/routes";
import {classNames} from "shared/lib/classNames/classNames";
import paw from "../../../shared/assets/icons/PawLogo.svg";
import call from "../../../shared/assets/icons/call.svg"
import local from "../../../shared/assets/icons/location.svg"
import pawButton from "../../../shared/assets/icons/PawButton.svg"


export const NavBar = memo(() => {
    const location = useLocation();
    const linkComponent =
        <>
            {Object.entries(routeConfig).map(([rout, props]) => (
                <div key={rout}>
                    {!props.authOnly &&
                        <Link to={props.path || '/'}>
                            <Button className={cls.ButtonLink} outline={location.pathname === props.path}>
                                {location.pathname === props.path&& <img className={cls.PawButton} src={pawButton}/>}
                                {routeNames[rout as AppRoutes]}
                            </Button>
                        </Link>
                    }
                </div>

            ))
            }

        </>

    return (
        <ContentWrapper>
            <nav className={classNames(cls.Navbar)}>
                <p className={cls.LogoText} >Лапки</p>
                <img className={cls.PawLogo} src={paw}/>
                <hr className={cls.FirstHr}/>
                {linkComponent}
                <hr className={cls.SecondHr}/>
                <div className={cls.BottomContact}>
                    <p><img src={call}/> 8-931-351-88-84</p>
                    <p><img src={local}/> Санкт-Петербург, ул. Ленина, 49</p>
                    <p>Пн - Вс 10:00 - 19:00 </p>
                    <p className={cls.EveryDay}>Ждем Вас каждый день!</p>
                </div>

            </nav>
        </ContentWrapper>
    );
});