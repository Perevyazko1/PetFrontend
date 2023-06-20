import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./RecordVisit.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

interface RecordVisitProps {
    className?: string
    children?: ReactNode
}


export const DetailsRecordVisit = memo((props: RecordVisitProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <ContentWrapper>
            <div
                className={classNames(cls.RecordVisit, mods, [className])}
                {...otherProps}
            >
                {children}
            </div>
        </ContentWrapper>
    );
});