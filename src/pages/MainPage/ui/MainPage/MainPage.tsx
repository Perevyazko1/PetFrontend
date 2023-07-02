import {memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Home} from "widgets/Home";
import {AboutUs} from "widgets/AboutMe/ui/AboutUs";
import cls from './MainPage.module.scss';
import {RecordVisit} from "../../../../features/RecordVisit";
import {RandomPhotoPet} from "../../../../features/RandomPhotoPet";
import {HowGetPet} from "../../../../widgets/HowGetPet";


const MainPage = memo(() => {

    return (
        <div
            className={classNames(cls.MainPage, {}, [''])}
        >
            <Home/>
            <AboutUs/>
            <RecordVisit/>
            <RandomPhotoPet/>
            <HowGetPet/>
            {/*<Donations/>*/}
        </div>
    );
});

export default MainPage;