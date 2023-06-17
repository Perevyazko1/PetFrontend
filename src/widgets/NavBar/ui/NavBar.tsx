import React, {memo} from 'react';
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Link} from "react-router-dom";


export const NavBar = memo(() => {

    return (
        <ContentWrapper >
            <nav style={{display: "flex", flexDirection: "column"}}>
                <Link to="/">Главная</Link>
                <Link to="/news">Новости</Link>
                <Link to="/pet">Страница Животного</Link>
                <Link to="/user">Личный кабинет</Link>
            </nav>
        </ContentWrapper>
    );
});