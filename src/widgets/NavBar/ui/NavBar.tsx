import React, {memo, ReactNode, useState, useEffect} from 'react';
import cls from "./NavBar.module.scss"
import {Link, useLocation} from "react-router-dom";
import {routeConfig} from "../../../app/providers/router/config/routeConfig";
import {Button} from "../../../shared/ui/Button/Button";
import {AppRoutes, getRouteMain, getRouteNews, getRoutePet, routeNames} from "../../../shared/consts/routes/routes";
import {classNames, Mods} from "shared/lib/classNames/classNames";
import paw from "../../../shared/assets/icons/PawLogo.svg";
import call from "../../../shared/assets/icons/call.svg"
import local from "../../../shared/assets/icons/location.svg"
import pawButton from "../../../shared/assets/icons/PawButton.svg"
import menu from "../../../shared/assets/icons/Menu.svg"
import  filter from  "../../../shared/assets/icons/Filter.svg"
import cross from "../../../shared/assets/icons/cross.svg"
import { FilterNews } from 'features/FilterNews/FilterNews';
import {useWindowWidth} from "../../../shared/lib/hook/useWindowWidth/useWindowWidth";
import { Filter } from 'features/Filter/Filter';


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
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const windowWith = useWindowWidth()
    const pathNews = getRouteNews

    const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

    const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
    const handleHiddenNavBar = () => {
    setIsNavbarOpen(false);
  };
    const location = useLocation();
    useEffect(() => {
    handleHiddenNavBar();
    console.log(getRouteMain())
        console.log(location.pathname)
  }, [location]);

    const mods: Mods = {
    };

    // const combinedClassName = classNames("", mods, [className]);
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
            <nav className={(isNavbarOpen||isFilterOpen)? cls.Open: cls.Navbar}>
                {!isNavbarOpen && !isFilterOpen &&
                        <div className={cls.LogoText}>
                            {getRouteMain()!==location.pathname &&
                                <>
                                    {windowWith <= 1050   &&
                                        <img src={filter} onClick={handleToggleFilter} className={cls.Filter}/>
                                    }
                                </>}
                            <img src={menu} onClick={handleToggleNavbar} className={cls.Menu}/>
                            Лапки
                            <img className={cls.PawLogo} src={paw}/>
                        </div>
                }
                {isNavbarOpen &&
                    <img src={cross} className={cls.Cross} onClick={handleHiddenNavBar}/>
                }
                    {(isNavbarOpen||windowWith >= 1420) &&
                        <>
                            {isNavbarOpen &&
                                <div className={cls.LogoTextOpenNavBar}>
                                    Лапки
                                    <img className={cls.PawLogoOpenNavBar} src={paw}/>
                                </div>
                            }
                            <hr className={cls.FirstHr}/>
                            {linkComponent}
                            <hr className={cls.SecondHr}/>
                            <div className={cls.BottomContact}>
                                <div className={cls.ContactInfo}>
                                    <img className={cls.IconNumber} src={call}/>
                                    8-931-351-88-84
                                </div>
                                <div className={cls.ContactInfo}>
                                    <img className={cls.IconAddress} src={local}/>
                                    Санкт-Петербург, ул. Ленина, 49
                                </div>

                                <div className={cls.ContactInfo}>Пн - Вс
                                    <span className={cls.GreenTimeContact}>10:00 - 19:00</span>
                                </div>
                                <div className={cls.EveryDay}>Ждем Вас каждый день!</div>
                            </div>

                        </>
                    }
                {isFilterOpen &&
                    <img src={cross} className={cls.Cross} onClick={handleToggleFilter}/>
                }

                {isFilterOpen &&
                    <>
                        {getRouteNews()===location.pathname &&
                            <FilterNews className={cls.FilterNewsOpenNavbar}/>
                        }
                        {getRoutePet()===location.pathname &&
                            <Filter className={cls.FilterOpenNavbar}/>
                        }
                    </>


                    }

            </nav>
        </div>
    );
});