import React from 'react'
import { HomePageProps } from '../interfaces/HomePageInterfaces'
import { Layout } from 'antd'
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
            <div className='main-layaout'>
                <Header className='main-layout-header' style={headerStyle}>Header</Header>
                <Content style={contentStyle}>{children}</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </div>
        </>
    )
}

export default MainLayout