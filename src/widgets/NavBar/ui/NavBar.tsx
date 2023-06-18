import React, {memo} from 'react';
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";
import {Link} from "react-router-dom";
import {Button} from "../../../shared/ui/Button/Button";


export const NavBar = memo(() => {

    return (
        <ContentWrapper >
            <nav style={{display: "flex", flexDirection: "column"}}>
                <Link to="/"><Button color={"btn-enable"}>Главная</Button></Link>
                <Link to="/news"><Button color={"btn-disable"}>Новости</Button></Link>
                <Link to="/pet"><Button color={"btn-disable"}>Страница Животного</Button></Link>
                <Link to="/user"><Button color={"btn-disable"}>Личный кабинет</Button></Link>
            </nav>
        </ContentWrapper>
    );
});