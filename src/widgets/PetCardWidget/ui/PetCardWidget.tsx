import React from 'react';
import {pet} from 'entity/pet';
import {Button} from "shared/ui/Button/Button";
import cls from './PetCardWidget.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames";

interface PetCardWidgetProps {
    pet: pet,
}

export const PetCardWidget = (props: PetCardWidgetProps) => {
    const {pet} = props;

    return (
        <>
            <div className={classNames(cls.cardPet)}>
                {pet.name} + {pet.gender}
            </div>
            <Button color={"btn-enable"} className={"mt-4"}>
                Take it
            </Button>
        </>

    );
};
