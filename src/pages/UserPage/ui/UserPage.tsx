import {memo, ReactNode, useEffect} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useAppDispatch, useAppSelector} from "../../../shared/lib/hook/reduxHooks/reduxHooks";
import {userPageActions} from "../model/slice/userPageSlice";

interface UserPageProps {
    className?: string
    children?: ReactNode
}


const UserPage = memo((props: UserPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const dispatch = useAppDispatch();

        useEffect(() => {
        setTimeout(() => {
            dispatch(userPageActions.setUsers([
                {
                    id: 1,
                    first_name: "Андрей",
                    last_name: "Перевязко",
                    email: "123@mail.ru",
                    username: "perevyazko",
                    password: "123456"
                }
            ]))
        }, 1000)
    }, [])
// TODO удалить задержку загрузки в прод

    const userList = useAppSelector(state => state.userPage.user);
    const isLoading = useAppSelector(state => state.userPage.pageIsLoading);


    return (
        <div
            className={classNames('')}
            {...otherProps}
        >
            <h1>Личный кабинет</h1>
            {isLoading
            ?
                <>Skeleton</>
                :
                <>
                    {
                        userList?.map((user)=>(
                            <div key={user.id}>
                                {user.first_name}
                            </div>
                        ))
                    }
                </>
            }
            {children}
        </div>
    );
});
export default UserPage