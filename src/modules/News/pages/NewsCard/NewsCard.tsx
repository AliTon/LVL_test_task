import React from "react";
import {INews} from "../interfaces";


type Props = {
    data: INews;
};

const NewsCard  = (data: Props) => {

    const {
            createdAt,
            name,
            views,
            image,
            author,
            text,
            id
    } = data.data;


    return <div>
                <h1>{name}</h1>
                <div>{text}</div>
                <img src={image} height={'100px'}/>
                <div>{author}</div>
                   view: <big>{views}</big>
                id: <big>{id}</big>
                createdAt: <span>{createdAt}</span>

           </div>
}

export  default  NewsCard;