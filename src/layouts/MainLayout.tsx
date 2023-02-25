import React from 'react'
import { HomePageProps } from '../interfaces/HomePageInterfaces'
import { Card, Layout } from 'antd'
import './MainLayout.css'


const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '80%',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
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