import React from 'react'
import { HomePageProps } from '../interfaces/HomePageInterfaces'
import { Card, Layout } from 'antd'
import './MainLayout.css'


const { Content } = Layout;


const MainLayout: React.FC<HomePageProps> = ({ children }) => {
    return (
        <>
            <Layout >
                <Content>{children}</Content>
            </Layout>
        </>
    )
}

export default MainLayout