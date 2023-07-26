import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {NewsPage} from "pages/NewsPage";
import {PetPage} from "pages/PetPage";
import {UserPage} from "pages/UserPage";
import {NavBar} from "widgets/NavBar";
import {WithWrapper} from "shared/ui/WithWrapper/WithWrapper";
import {useWindowWidth} from "shared/lib/hook/useWindowWidth/useWindowWidth";
import {PageWrapper} from "../shared/ui/PageWrapper/PageWrapper";



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
        <WithWrapper>
            <PageWrapper>
                <NavBar/>
                {contentBlock}
            </PageWrapper>
        </WithWrapper>
    )

    const mobileView = (
        <WithWrapper>
            <PageWrapper>
                {contentBlock}
            </PageWrapper>
        </WithWrapper>
    )

    return pageWidth <= 1439 ? mobileView : desktopView;
}

export default App;
