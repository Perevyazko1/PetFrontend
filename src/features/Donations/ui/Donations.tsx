import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Donations.module.scss"
import {ContentWrapper} from "../../../shared/ui/ContentWrapper/ContentWrapper";

interface DonationsProps {
    className?: string
    children?: ReactNode
}


export const DetailsDonations = memo((props: DonationsProps) => {
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
                className={classNames(cls.Donations, mods, [className])}
                {...otherProps}
            >
                {children}
            </div>
        </ContentWrapper>
    );
});