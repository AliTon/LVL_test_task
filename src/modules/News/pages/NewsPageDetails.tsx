import React from "react";
import {useAppDispatch, useAppSelector} from "../../../configureApp/hooks";
import {selectNews} from "../redux/selectors/newsSelector";
import {getNewsFeed} from "../redux/slices/newsSlice";

const NewsPage  = () => {
    const dispatch  = useAppDispatch();
    const news = useAppSelector(selectNews);

    console.log(news);

    React.useEffect(() => {
        dispatch(getNewsFeed());
    }, [dispatch]);


    return <div>
        NewsPage
    </div>
}

export  default  NewsPage;