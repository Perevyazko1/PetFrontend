import React, {memo, ReactNode, useCallback, useEffect, useState} from 'react';
import cls from "./NavBar.module.scss"
import {Link, useLocation} from "react-router-dom";
import {routeConfig} from "app/providers/router/config/routeConfig";
import {Button} from "shared/ui/Button/Button";
import {AppRoutes, getRouteMain, getRouteNews, getRoutePet, routeNames} from "shared/consts/routes/routes";
import {Mods} from "shared/lib/classNames/classNames";
import paw from "shared/assets/icons/PawLogo.svg";
import call from "shared/assets/icons/call.svg"
import local from "shared/assets/icons/location.svg"
import pawButton from "shared/assets/icons/PawButton.svg"
import detail_menu from "shared/assets/icons/detail_menu.svg"
import filter from "shared/assets/icons/Filter.svg"
import {FilterNews} from 'features/FilterNews/FilterNews';
import {useWindowWidth} from "shared/lib/hook/useWindowWidth/useWindowWidth";
import {Filter} from 'features/Filter/Filter';


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

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsNavbarOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

    const handleToggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleToggleNavbar = () => {
        isFilterOpen ? setIsFilterOpen(false) :
            setIsNavbarOpen(!isNavbarOpen);

    };
    const handleHiddenNavBar = () => {
        setIsNavbarOpen(false);
    };
    const location = useLocation();
    useEffect(() => {
        handleHiddenNavBar();
    }, [location]);
    useEffect(() => {
        windowWith > 1420 && setIsNavbarOpen(false);
    }, [windowWith]);

    const mods: Mods = {};

    const linkComponent =
        <div
            className={isNavbarOpen ? `${cls.ContainerButton} ${cls.openButton}` : `${cls.ContainerButton} ${cls.closeButton}`}>
            {Object.entries(routeConfig)
                .filter(([route, props]) => !props.authOnly)
                .map(([rout, props]) => (

                    <div key={rout}>
                        <Link to={props.path || '/'}>
                            <Button className={cls.ButtonLink} outline={location.pathname === props.path}>
                                {location.pathname === props.path && <img className={cls.PawButton} src={pawButton}/>}
                                {routeNames[rout as AppRoutes]}
                            </Button>
                        </Link>
                    </div>

                ))
            }

        </div>


    return (

        <div
            className={(isNavbarOpen || isFilterOpen) ? `${cls.NavbarWrapper} ${cls.openWrapper}` : `${cls.NavbarWrapper}`}>
            <nav
                className={(isNavbarOpen || isFilterOpen) ? `${cls.Navbar} ${cls.openNav}` : `${cls.Navbar} ${cls.closeNav}`}>
                {getRouteMain() !== location.pathname &&
                    <>
                        {windowWith <= 1140 &&
                            <img src={filter} onClick={handleToggleFilter} className={cls.Filter}/>
                        }
                    </>
                }
                <div
                    className={isNavbarOpen || isFilterOpen ? `${cls.Menu} ${cls.openMenu}` : `${cls.Menu} ${cls.closeMenu}`}
                    onClick={handleToggleNavbar}
                >
                    <img src={detail_menu}
                         className={isNavbarOpen || isFilterOpen ? `${cls.DetailMenu} ${cls.openMenu} ${cls.rotateLeft}` : `${cls.DetailMenu} ${cls.rotateRight} `}
                    />
                    <img src={detail_menu}
                         className={isNavbarOpen || isFilterOpen ? `${cls.DetailMenu} ${cls.openMenu} ${cls.rotateLeft}` : `${cls.DetailMenu}  ${cls.rotateRight}`}
                    />
                    <img src={detail_menu}
                         className={isNavbarOpen || isFilterOpen ? `${cls.DetailMenu} ${cls.openMenu}` : `${cls.DetailMenu} ${cls.closeMenu}`}
                    />
                    <img src={detail_menu}
                         className={isNavbarOpen || isFilterOpen ? `${cls.DetailMenu} ${cls.openMenu}` : `${cls.DetailMenu} ${cls.closeMenu}`}
                    />

                </div>

                <div
                    className={(isNavbarOpen || isFilterOpen) ? `${cls.LogoText} ${cls.openLogoText}` : `${cls.LogoText} ${cls.closeLogoText}`}>
                    {/*{isNavbarOpen &&*/}
                    {/*    <img src={cross} className={!isNavbarOpen || !isFilterOpen ? cls.Cross : null}*/}
                    {/*         onClick={handleHiddenNavBar}/>*/}
                    {/*}*/}
                    Лапки
                    <img
                        className={(isNavbarOpen || isFilterOpen) ? `${cls.PawLogo} ${cls.openPawLogo}` : `${cls.PawLogo} ${cls.closePawLogo}`}
                        src={paw}/>
                </div>
                {!isFilterOpen &&
                    <div className={!isFilterOpen && cls.HiddenContentNav}>
                        <hr className={cls.FirstHr}/>
                        {linkComponent}
                        <hr className={isNavbarOpen ? `${cls.SecondHr} ${cls.openSecondHr}` : `${cls.SecondHr} ${cls.closeSecondHr}`}/>
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
                    </div>
                }
                    <div className={!isFilterOpen && cls.HiddenFilter}>
                        {getRouteNews() === location.pathname &&
                            <FilterNews className={cls.FilterNewsOpenNavbar}/>
                        }
                        {getRoutePet() === location.pathname &&
                            <Filter className={cls.FilterOpenNavbar}/>
                        }
                    </div>


            </nav>
        </div>
    );
});