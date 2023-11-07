import {memo, ReactNode, useEffect, useState} from 'react';
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
import Skeleton from "react-loading-skeleton";

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
        const [isLoadingImg,setIsLoadingImg]=useState(false)
        const dispatch = useAppDispatch();
        const windowWith = useWindowWidth()

        useEffect(() => {
        setTimeout(() => {
            dispatch(newsPageActions.setUsers([
                {
                    id: 1,
                    header: "Чудесный, молодой Космо ждет свою семью в приюте.\n" +
                        "22 МАЯ в приюте для бездомных животных «ЛАПКА» состоится ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ!С 11 до 17 часов\n" +
                        "ждём в гости всех старых друзей приюта и будем очень рады новым знакомствам! Если вы мечтаете\n" +
                        "погулять с собакой по весеннему лесу и сделать доброе дело — приезжайте к нам ...",
                    headerPhoto:"#День открытых дверей",
                    text: "",
                    category: "",
                    photo:"https://www.science.org/do/10.1126/science.abq3966/full/_20220405_on_dogtalk-1675062809387.jpg",
                    date:"15.06.23",
                    views: 105
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
            {
                newsList?.map((news)=>(
                    <div className={cls.CardNews} key={news.id}>
                    {!isLoadingImg && <Skeleton className={cls.ContainerPhoto}/>}
                        <div className={isLoadingImg ? cls.ContainerPhoto:cls.None}>
                        <img className={cls.PhotoNews}
                             src={news.photo}
                             onLoad={()=> setIsLoadingImg(true)}
                        />
                        <p className={cls.HeaderPhoto}>{news.headerPhoto}</p>
                    </div>

                    {!isLoadingImg? <Skeleton count={4} className={cls.HeaderNews}/>:
                    <div className={cls.HeaderNews}>{windowWith<1420 ? `${news.header.slice(0,100)}...`:`${news.header.slice(0,300)}...`}</div>
                    }
                    {!isLoadingImg ? <Skeleton className={cls.BottomNews}/>:
                        <div className={cls.BottomNews}>
                        <Button className={cls.Button}>Читать далее...</Button>
                        <div className={cls.Views}>
                            <img src={calendar}/>
                            <p className={cls.Calendar}>{news.date}</p>
                            <img src={eye}/>
                            <p>{news.views}</p>
                        </div>
                    </div>
                    }



                    </div>
                ))
            }
                    {!isLoading && windowWith > 1050 &&
                        <FilterNews/>
                    }

            {children}
        </div>
    );
});
export default NewsPage