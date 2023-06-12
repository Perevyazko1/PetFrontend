import React from 'react';
import {pet} from "entity/pet";
import {PetCardWidget} from "widgets/PetCardWidget";

export const MainPage = () => {
    const petEntity: pet = {
        name: "Tom",
        gender: "man",
    }
    return (
        <div>
            <PetCardWidget pet={petEntity}/>
        </div>
    );
};