import { createAction } from '@reduxjs/toolkit'
import { IOrder } from '../../interfaces'

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
    function (order: IOrder) {
        return {
            payload: {
                order,
            },
        }
    }
)
