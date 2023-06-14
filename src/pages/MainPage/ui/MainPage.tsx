import React from 'react';
import {pet} from "entity/pet";
import {PetCardWidget} from "widgets/PetCardWidget";




const MainPage = () => {
    const petEntity: pet = {
        id: 1,
        name: "Tom",
        gender: "man",
    }
    return (
        <div>
            <PetCardWidget pet={petEntity}/>
        </div>
    );
};
export default MainPage;