import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface NewsPageProps {
    className?: string
    children?: ReactNode
}


const NewsPage = memo((props: NewsPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames('', mods, [className])}
            {...otherProps}
        >Страница Новостей
            {children}
        </div>
    );
});
export default NewsPage