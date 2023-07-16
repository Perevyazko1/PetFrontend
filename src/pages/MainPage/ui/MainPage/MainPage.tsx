import {memo, ReactNode, useMemo, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Home} from "widgets/Home";
import {AboutUs} from "widgets/AboutMe/ui/AboutUs";
import cls from './MainPage.module.scss';
import { Parallax, Background } from 'react-parallax';
import {RecordVisit} from "../../../../features/RecordVisit";
import {RandomPhotoPet} from "../../../../features/RandomPhotoPet";
import {HowGetPet} from "../../../../widgets/HowGetPet";
import {Donations} from "../../../../features/Donations";
import dog from "../../../../shared/assets/icons/BigBone.svg"
import {ParallaxDogs} from "../../../../features/Parallax/ParallaxDogs";


const MainPage = memo(() => {


    // const root = useMemo(()=>document.querySelector(":root"),[])
    // const parallaxHandler = (e: { clientX: number; clientY: number }) => {
    //     const x = (e.clientX - window.innerWidth / 2 ) / 100;
    //     const y = (e.clientY - window.innerHeight / 2 ) / 100;
    //     if (root instanceof HTMLDivElement){
    //         root.style.setProperty("--posX", `${-x}`)
    //         root.style.setProperty("--posY", `${-y}`)
    //     }
    //     console.log(x, y)
    // //
    // }



    return (
        <div
            className={classNames(cls.MainPage, {}, [''])}
        >
            <Home/>
            <AboutUs/>
            <RecordVisit/>
            <RandomPhotoPet/>
            <HowGetPet/>
            <Donations/>
        </div>
    );
});

export default MainPage;