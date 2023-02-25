import { Button, Col, Row, Space, Typography } from 'antd'
import React from 'react'
import './HomePage.css'

const { Text, Title, Paragraph } = Typography;
const HomePage = () => {
  return (
    <div className='container'>
      <Space className='card-home-page' align="center" direction="vertical">
        <Row justify={'center'}>
          <Col span={12}>
            <Title level={3} >Welcome to the Trivia Challenge!</Title>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Paragraph >You will be presented with 10 True or False questions.</Paragraph>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Paragraph >Can you score 100%</Paragraph>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Button >BEGIN!</Button>
          </Col>
        </Row>
      </Space>
    </div>

  )
}

export default HomePage