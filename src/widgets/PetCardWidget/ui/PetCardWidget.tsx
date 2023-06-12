import React from 'react';
import {pet} from 'entity/pet';
import {Button} from "shared/ui/Button/Button";

interface PetCardWidgetProps {
    pet: pet,
}

export const PetCardWidget = (props: PetCardWidgetProps) => {
    const {pet} = props;

    return (
        <>
            <div style={{width: "130px", height: "130px", background: "yellow"}}>
                {pet.name} + {pet.gender}
            </div>
            <Button color={"dark"} className={"mt-4"}>
                Take it
            </Button>
        </>

    );
};
