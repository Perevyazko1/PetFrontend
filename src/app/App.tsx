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
import {PageWrapper} from "../shared/ui/PageWrapper/PageWrapper";
import {PetFilter} from "../shared/ui/PetFilter/PetFilter";


function App() {
    return (
        <>
            <PageWrapper>
                <NavBar/>

                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/pet" element={<PetPage/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                </Routes>
                <PetFilter/>
            </PageWrapper>
        </>
    );
}

export default App;
