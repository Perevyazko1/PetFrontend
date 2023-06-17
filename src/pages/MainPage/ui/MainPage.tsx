import React from 'react';
import {Home} from "../../../widgets/Home/ui/Home";
import {AboutMe} from "../../../widgets/AboutMe/ui/AboutMe";


const MainPage = () => {
        return <h1>
            Главная страница
            <Home/>
            <AboutMe/>
        </h1>;
    }
;

export default MainPage;