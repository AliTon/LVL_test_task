import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { getNewsFeedAction } from '../redux/actions/newsActions'
import { Select } from 'antd'
import NewsFeed from '../components/NewsFeed'
import { IOrder } from '../interfaces'
import { selectLoading, selectNews } from '../redux/selectors/newsSelector'
import { ImgSkeleton } from '../../../components/ImgSkeleton/ImgSkeleton'
import {
    ImgSkeletonWrapper,
    MainPageStyle,
    SortingSectionStyle,
} from '../styles/index.styled'


const OrderOptions: OptionType[] = [
    {
        label: 'Date',
        value: 'createdAt',
    },
    {
        label: 'Views',
        value: 'views',
    },
]

const OrderTypes: OptionType[] = [
    {
        label: 'ASC',
        value: 'asc',
    },
    {
        label: 'DESC',
        value: 'desc',
    },
]

const MainPage = () => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const loading = useAppSelector(selectLoading)

    const [order, setOrder] = useState<IOrder>({
        orderBy: 'createdAt',
        mode: 'asc',
    })

    useEffect(() => {
        dispatch(getNewsFeedAction(order))
    }, [order, dispatch])

    const handleOrderChanged = (value: string, key: keyof IOrder) => {
        setOrder((order) => ({ ...order, [key]: value }))
    }

    return (
        <MainPageStyle>
            <SortingSectionStyle>
                <div className="sorting">
                    <div className="selectLabel">Sorting by` </div>
                    <Select
                        options={OrderOptions}
                        className="select"
                        value={order.orderBy}
                        onChange={(value) =>
                            handleOrderChanged(value, 'orderBy')
                        }
                        getPopupContainer={(trigger) => trigger.parentNode}
                    />
                </div>
                <div className="sorting">
                    <div className="selectLabel">Order by`</div>
                    <Select
                        options={OrderTypes}
                        value={order.mode}
                        className="select"
                        onChange={(value) => handleOrderChanged(value, 'mode')}
                        getPopupContainer={(trigger) => trigger.parentNode}
                    />
                </div>
            </SortingSectionStyle>

            {loading ? (
                <ImgSkeletonWrapper>
                    <ImgSkeleton />
                </ImgSkeletonWrapper>
            ) : (
                <NewsFeed news={news} />
            )}
        </MainPageStyle>
    )
}

export default MainPage
