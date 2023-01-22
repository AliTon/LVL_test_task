import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../configureApp/hooks'
import { getNewsFeedAction } from '../redux/actions/newsActions'
import { Card, Select } from 'antd'
import NewsPage from './NewsPage'
import styled from 'styled-components'

export const MainPageStyle = styled.div`
    display: flex;
    justify-content: center;
`
export const SortingSectionStyle = styled.div`
    background: gainsboro;
    position: fixed;
    height: 80px;
    width: 100%;
    z-index: 1;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .sorting {
        display: block;
        .selectLabel {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 4px;
        }
        .select {
            margin-top: 4px;
            text-align: center;
            display: flex;
        }
    }
`

const MainPage = () => {
    const dispatch = useAppDispatch()
    const defaultSelected = {
        label: 'Date',
        value: 'createdAt',
    }
    const defaultSelected2 = {
        label: 'ASC',
        value: 'asc',
    }

    useEffect(() => {
        dispatch(getNewsFeedAction(defaultSelected.value))
    }, [])

    const handleSelectChanged = (value: string) => {
        dispatch(getNewsFeedAction(value))
    }

    return (
        <MainPageStyle>
            <SortingSectionStyle>
                <div className="sorting">
                    <div className="selectLabel">Sorting by date ot view: </div>
                    <Select
                        options={[
                            {
                                label: 'Date',
                                value: 'createdAt',
                            },
                            {
                                label: 'Views',
                                value: 'views',
                            },
                        ]}
                        className="select"
                        defaultValue={defaultSelected.value}
                        onChange={handleSelectChanged}
                        getPopupContainer={(trigger) => trigger.parentNode}
                    />
                </div>
                <div className="sorting">
                    <div className="selectLabel">
                        Sorting by higher or lower:{' '}
                    </div>
                    <Select
                        options={[
                            {
                                label: 'ASC',
                                value: 'asc',
                            },
                            {
                                label: 'DESC',
                                value: 'desc',
                            },
                        ]}
                        className="select"
                        defaultValue={defaultSelected2.value}
                        onChange={handleSelectChanged}
                        getPopupContainer={(trigger) => trigger.parentNode}
                    />
                </div>
            </SortingSectionStyle>

            <NewsPage />
        </MainPageStyle>
    )
}

export default MainPage
