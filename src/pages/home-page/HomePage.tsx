import React, { useContext, useEffect } from 'react'
import { Button, Col, Row, Space, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { BrainGameContex } from '../../context/BrainGameContex';
import { useFetchQuestions } from '../../hooks/useFetchQuestions';
import './HomePage.css'

const { Title, Paragraph } = Typography;


const HomePage = () => {
  
  const navigate = useNavigate()
  const { setCurrentQuestion, setQuestions } = useContext(BrainGameContex);
  const { isLoading, questions } = useFetchQuestions();


  useEffect(() => {
    setCurrentQuestion(questions[0])
    setQuestions(questions)
  }, [isLoading])

  return (
    <div className='container'>
      <Space className='card-home-page' align='center' direction='vertical'>
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
            <Button onClick={() => { navigate('/question') }} >BEGIN!</Button>
          </Col>
        </Row>
      </Space>
    </div>

  )
}

export default HomePage