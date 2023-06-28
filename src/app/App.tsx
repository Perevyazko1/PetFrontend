import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {NewsPage} from "pages/NewsPage";
import {PetPage} from "pages/PetPage";
import {UserPage} from "pages/UserPage";
import {NavBar} from "widgets/NavBar";
import {PageWrapper} from "shared/ui/PageWrapper/PageWrapper";
import {useWindowWidth} from "shared/lib/hook/useWindowWidth/useWindowWidth";


function App() {
    const pageWidth = useWindowWidth();


    const contentBlock = (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/pet" element={<PetPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
        </Routes>
    )

    const desktopView = (
        <PageWrapper>
            <NavBar/>
            {contentBlock}
        </PageWrapper>
    )

    const mobileView = (
        <>
            <div className={'nawWrapperMobile'}/>
            {contentBlock}
        </>
    )

    return pageWidth <= 1200 ? mobileView : desktopView;
}

export default App;
