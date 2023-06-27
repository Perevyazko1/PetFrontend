import {memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Home} from "widgets/Home";
import {AboutMe} from "widgets/AboutMe/ui/AboutMe";
import cls from './MainPage.module.scss';


const MainPage = memo(() => {

    return (
        <div
            className={classNames(cls.MainPage, {}, [''])}
        >
            <Home/>
            <AboutMe/>
            {/*<RecordVisit/>*/}
            {/*<RandomPhotoPet/>*/}
            {/*<HowGetPet/>*/}
            {/*<Donations/>*/}
        </div>
    );
});

export default MainPage;