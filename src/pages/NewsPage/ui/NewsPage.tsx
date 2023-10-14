import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {userPageActions} from "../../UserPage/model/slice/userPageSlice";
import {newsPageActions} from "../model/slice/newsPageSlice";
import {FilterNews} from "../../../features/FilterNews/FilterNews";
import cls from "./NewsPage.module.scss"
import {Button} from "../../../shared/ui/Button/Button";
import eye from "../../../shared/assets/icons/eye.svg";
import calendar from "../../../shared/assets/icons/calendar.svg"
import {useWindowWidth} from "../../../shared/lib/hook/useWindowWidth/useWindowWidth";

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

        const dispatch = useAppDispatch();
        const windowWith = useWindowWidth()

        useEffect(() => {
        setTimeout(() => {
            dispatch(newsPageActions.setUsers([
                {
                    id: 1,
                    header: "",
                    text: "",
                    category: ""
                }
            ]))
        }, 1000)
    }, [])
// TODO удалить задержку загрузки в прод

    const newsList = useAppSelector(state => state.newsPage.news);
    const isLoading = useAppSelector(state => state.newsPage.pageIsLoading);


    return (
        <div
            className={classNames(cls.NewsPage)}
            {...otherProps}
        >
            {isLoading
            ?
                <>Skeleton</>
                :
                <>
                <div className={cls.CardNews}>
                    <div className={cls.ContainerPhoto}>
                        <img className={cls.PhotoNews} src={'https://www.science.org/do/10.1126/science.abq3966/full/_20220405_on_dogtalk-1675062809387.jpg'}/>
                        <p className={cls.HeaderPhoto}>#День открытых дверей</p>
                    </div>
                    <div className={cls.HeaderNews}>Чудесный, молодой Космо ждет свою семью в приюте.
                        22 МАЯ в приюте для бездомных животных «ЛАПКА» состоится ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ!С 11 до 17 часов
                        ждём в гости всех старых друзей приюта и будем очень рады новым знакомствам! Если вы мечтаете
                        погулять с собакой по весеннему лесу и сделать доброе дело — приезжайте к нам ...
                    </div>
                    <div className={cls.BottomNews}>
                        <Button>Читать далее...</Button>
                        <div className={cls.Views}>
                            <img src={calendar}/>
                            <p className={cls.Calendar}>15.06.23</p>
                            <img src={eye}/>
                            <p>105</p>
                        </div>
                    </div>
            </div>
                    {windowWith > 1050 &&
                        <FilterNews/>
                    }

                    {
                        newsList?.map((news)=>(
                            <div key={news.id}>
                                {news.header}
                            </div>
                        ))
                    }
                </>
            }
            {children}
        </div>
    );
});
export default NewsPage