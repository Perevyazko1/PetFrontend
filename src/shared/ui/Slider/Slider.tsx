import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Slider.module.scss"


// TODO удалить  в прод
import first from"../../../shared/assets/images/RandomPhoto/1.png"
import second from"../../../shared/assets/images/RandomPhoto/2.png"
import third from"../../../shared/assets/images/RandomPhoto/3.png"
import fourth from"../../../shared/assets/images/RandomPhoto/4.png"
import fifth from"../../../shared/assets/images/RandomPhoto/5.png"

const img = [
    <img key={first} src={first} />,
    <img key={second} src={second} />,
    <img key={third} src={third} />,
    <img key={fourth} src={fourth} />,
    <img key={fifth} src={fifth} />,
]



interface SliderProps {
    className?: string
    children?: ReactNode
}


export const Slider = memo((props: SliderProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
            <div className={classNames(cls, mods, [className])}>
                <div className={cls.faders}>
                    <div className={cls.left}></div>
                    <div className={cls.right}></div>
                </div>

                <div className={cls.items}>
                    {/*<div className={cls.entry}>*/}
                        {/*<img src=https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />*/}
                        {img}

                {/*</div>*/}
            </div>
        </div>
    );
});