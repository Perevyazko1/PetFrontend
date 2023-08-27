import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {userPageActions} from "../../UserPage/model/slice/userPageSlice";
import {newsPageActions} from "../model/slice/newsPageSlice";
import {FilterNews} from "../../../features/FilterNews/FilterNews";

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

        useEffect(() => {
        setTimeout(() => {
            dispatch(newsPageActions.setUsers([
                {
                    id: 1,
                    header: "Новость",
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
            className={classNames('')}
            {...otherProps}
        >
            {isLoading
            ?
                <>Skeleton</>
                :
                <>
                    <FilterNews/>
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