import {memo, ReactNode} from 'react';
import { Parallax, Background } from 'react-parallax';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import dog from "../../shared/assets/images/FirstCorgi.png";
import cls from "../../widgets/Home/ui/Home.module.scss"


interface ParallaxProps {
    className?: string
    children?: ReactNode
    src?: string
}


export const ParallaxDogs = memo((props: ParallaxProps) => {
    const {
        className,
        children,
        src,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames('', mods, [className])}
            {...otherProps}
        >
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={src}
                    bgImageAlt="the dog"
                    strength={-200}
                    bgImageSizes={"(min-width: 40em) 100vw"}
                >
                    <div style={{ height: '500px',width:'500px' }} />
                </Parallax>

            {children}
        </div>
    );
});