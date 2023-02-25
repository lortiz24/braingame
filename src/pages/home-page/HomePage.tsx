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
      <Card className='card-home-page' bodyStyle={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Title className="title">
          <Title className="title-part line-1">Trivia Challenge</Title>
        </Title>

        <Row justify={'center'}>
          <Col span={12}>
            <Title level={2} style={{ fontSize: '28px' }}>You will be presented with 10 True or False questions.</Title>
          </Col>
          <Col span={24}>
            <Title level={2} style={{ fontSize: '28px' }}>Can you score 100%</Title>
          </Col>
        </Row>

        <Row justify={'center'}>
          <Col span={12} style={{ display: "flex", justifyContent: 'center', alignContent: "center" }}>
            <span className='pulse-button' onClick={handleBeginClick}>Begin</span>
          </Col>
        </Row>


      </Card>
    </div>

  )
}

export default HomePage