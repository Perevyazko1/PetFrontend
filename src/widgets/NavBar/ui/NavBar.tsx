import React, {memo} from 'react';
import {ContentWrapper} from "shared/ui/ContentWrapper/ContentWrapper";
import {Link, useLocation} from "react-router-dom";
import {Button} from "shared/ui/Button/Button";
import {routes} from "shared/consts/routes/routes";
import cls from "./NavBar.module.scss"
import {classNames} from "../../../shared/lib/classNames/classNames";


export const NavBar = memo(() => {
    const location = useLocation();

    const linkComponent = (rout: string, name: string) => {
        return (
                <Link to={rout}>
                    <Button outline={location.pathname === rout}>
                        {name}
                    </Button>
                </Link>
        )
    };


    return (
        <ContentWrapper>
            <nav className={classNames(cls.Navbar)}>
                {Object.entries(routes).map(([route, name]) => (
                    <>
                        {linkComponent(route, name)}
                    </>
                ))}
            </nav>
        </ContentWrapper>
    );
});