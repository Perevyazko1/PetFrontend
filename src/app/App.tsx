import React from 'react';
import {
    BrowserRouter,
    Route, Routes, Link
} from "react-router-dom";

import './style/app.scss';
import {MainPage} from "../pages/MainPage";
import {NewsPage} from "../pages/NewsPage";
import {PetPage} from "../pages/PetPage";
import {UserPage} from "../pages/UserPage";
import {NavBar} from "../widgets/NavBar";




function App() {
  return (

    <div>
        <NavBar>
        <BrowserRouter>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/news">Новости</Link>
                <Link to="/pet">Страница Животного</Link>
                <Link to="/user">Личный кабинет</Link>
            </nav>

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/pet" element={<PetPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>
        </NavBar>
    </div>
  );
}

export default App;
