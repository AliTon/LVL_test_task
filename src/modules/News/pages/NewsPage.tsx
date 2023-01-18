import React from "react";
import {useAppDispatch, useAppSelector} from "../../../configureApp/hooks";
import {selectNews} from "../redux/selectors/newsSelector";
import {getNewsFeed} from "../redux/slices/newsSlice";
import NewsCard from "./NewsCard/NewsCard";

const NewsPage  = () => {
    const dispatch  = useAppDispatch();
    const news = useAppSelector(selectNews);

    console.log(news);

    React.useEffect(() => {
        dispatch(getNewsFeed());
    }, [dispatch]);


    return <div>
        {
            news.map(news => <NewsCard data={news}/>)
        }

    </div>
}

export  default  NewsPage;