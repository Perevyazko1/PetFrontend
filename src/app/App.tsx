import React from 'react';
import {
    BrowserRouter,
    Route, Routes, Link
} from "react-router-dom";

import {MainPage} from "../pages/MainPage";
import {NewsPage} from "../pages/NewsPage";
import {PetPage} from "../pages/PetPage";
import {UserPage} from "../pages/UserPage";
import {NavBar} from "../widgets/NavBar";


function App() {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/pet" element={<PetPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
