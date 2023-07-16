import {useInfiniteScroll} from "./useInfiniteScroll";
import {HTMLAttributes, MutableRefObject, ReactNode, useRef} from 'react';


interface PageWithPaginationProps extends HTMLAttributes<HTMLDivElement> {
    hasMore: boolean,
    scroll_callback: () => void,
    skeleton?: ReactNode,
}



export const PageWithPagination = (props: PageWithPaginationProps) => {
    const {
        hasMore,
        scroll_callback,
        skeleton,
        ...otherProps
    } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>


    useInfiniteScroll({
        callback: () => hasMore ? scroll_callback() : false,
        triggerRef: triggerRef,
        wrapperRef: wrapperRef
    })

    return (
        <div
            className={props.className}
            ref={wrapperRef}
            {...otherProps}
        >
            {props.children}

            <div ref={triggerRef}/>

            {hasMore &&
                <div>
                    {skeleton}
                </div>
            }
        </div>
    );
};