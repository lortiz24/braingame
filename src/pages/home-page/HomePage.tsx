import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { BrainGameContex } from '../../context/BrainGameContex';
import { useFetchQuestions } from '../../hooks/useFetchQuestion';
import './HomePage.css'

const { Title, Paragraph } = Typography;


const HomePage = () => {

  const navigate = useNavigate()
  const { setCurrentQuestion, setQuestions } = useContext(BrainGameContex);
  const { isLoading, questions, execute } = useFetchQuestions();


  const handleBeginClick = () => {
    execute()
  }

  useEffect(() => {
    setCurrentQuestion(0)
    setQuestions(questions)
    navigate('/question')
  }, [questions])

  return (
    <div className='container'>
      <Card className='card-home-page' >
        <Row justify={'center'}>
          <Col span={12}>
            <Title level={2} style={{ color: '#FFD700', fontSize: '28px' }}>Welcome to the Trivia Challenge!</Title>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Title level={2} style={{ color: '#FFD700', fontSize: '28px' }}>You will be presented with 10 True or False questions.</Title>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Title level={2} style={{ color: '#FFD700', fontSize: '28px' }}>Can you score 100%</Title>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={12}>
            <Button onClick={handleBeginClick} >BEGIN!</Button>
          </Col>
        </Row>
      </Card>
    </div>

  )
}

export default HomePage