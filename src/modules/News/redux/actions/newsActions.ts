import { createAction } from '@reduxjs/toolkit'

export const getNewsByIdAction = createAction(
    'GET_NEWS_BY_ID',
    function (id: string) {
        return {
            payload: {
                id,
            },
        }
    }
)

export const getNewsFeedAction = createAction(
    'GET_NEWS_FEED',
    function (orderBy?: string) {
        return {
            payload: {
                orderBy,
            },
        }
    }
)
