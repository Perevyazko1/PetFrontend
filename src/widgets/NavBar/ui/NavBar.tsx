import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
    children?: ReactNode
}


export const NavBar = memo((props: NavBarProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const [count, setCount] = useState(1)

    const mods: Mods = {
    };

    return (
        <div
            className={classNames(cls.Navbar, mods, [className])}
        >
            {children}
        </div>
    );
});