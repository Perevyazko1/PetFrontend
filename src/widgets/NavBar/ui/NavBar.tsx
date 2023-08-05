import React, {memo, ReactNode, useState} from 'react';
import cls from "./NavBar.module.scss"
import {Link, useLocation} from "react-router-dom";
import {routeConfig} from "../../../app/providers/router/config/routeConfig";
import {Button} from "../../../shared/ui/Button/Button";
import {AppRoutes, routeNames} from "../../../shared/consts/routes/routes";
import {classNames, Mods} from "shared/lib/classNames/classNames";
import paw from "../../../shared/assets/icons/PawLogo.svg";
import call from "../../../shared/assets/icons/call.svg"
import local from "../../../shared/assets/icons/location.svg"
import pawButton from "../../../shared/assets/icons/PawButton.svg"
import menu from "../../../shared/assets/icons/Menu.svg"
import  filter from  "../../../shared/assets/icons/Filter.svg"
import cross from "../../../shared/assets/icons/cross.svg"


interface NavBarProps {
    className?: string
    children?: ReactNode
    open?: boolean
}


export const NavBar = memo((props: NavBarProps) => {
        const {
        open = false,
        className,
        children,
        ...otherProps
    } = props

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

    const mods: Mods = {
        [cls.Open]: isNavbarOpen,
        [cls.Hidden]: !isNavbarOpen,
    };

    const location = useLocation();
    const combinedClassName = classNames("", mods, [className]);
    const linkComponent =
        <div className={cls.ContainerButton}>
            {Object.entries(routeConfig)
                .filter(([route, props]) => !props.authOnly)
                .map(([rout, props]) => (

                <div key={rout}>
                        <Link to={props.path || '/'}>
                            <Button className={cls.ButtonLink} outline={location.pathname === props.path}>
                                {location.pathname === props.path&& <img className={cls.PawButton} src={pawButton}/>}
                                {routeNames[rout as AppRoutes]}
                            </Button>
                        </Link>
                </div>

            ))
            }

        </div>

    return (
        <div className={cls.NavbarWrapper}>
            <nav className={cls.Navbar}>
                <div className={cls.LogoText}>
                    {/*<img src={filter} />*/}
                    <img src={menu} onClick={handleToggleNavbar} className={cls.Menu}/>
                    Лапки
                    <img className={cls.PawLogo} src={paw}/>
                </div>
                <div className={combinedClassName}>
                    <hr className={cls.FirstHr}/>
                    {linkComponent}
                    <hr className={cls.SecondHr}/>
                    <div className={cls.BottomContact}>
                        <p><img src={call}/> 8-931-351-88-84</p>
                        <p><img src={local}/> Санкт-Петербург, ул. Ленина, 49</p>
                        <p>Пн - Вс 10:00 - 19:00 </p>
                        <p className={cls.EveryDay}>Ждем Вас каждый день!</p>
                    </div>
                </div>
            </nav>
        </div>
    );
});