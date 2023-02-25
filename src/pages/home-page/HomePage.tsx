import { Button, Col, Row, Space, Typography } from 'antd'
import React, { useContext } from 'react'
import { BrainGameContex } from '../../context/BrainGameContex';
import { useFetchQuestions } from '../../hooks/useFetchQuestions';
import './HomePage.css'

const { Text, Title, Paragraph } = Typography;

const HomePage = () => {
  const { score } = useContext(BrainGameContex);
  const { isLoading, questions } = useFetchQuestions()
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
          <Col span={12}>
            {isLoading ? 'CARGANDO' : questions.map(question => (
              <Paragraph >{question.difficulty}</Paragraph>
            ))}

            { score}
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