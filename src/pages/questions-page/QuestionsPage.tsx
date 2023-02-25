import React, { useContext } from 'react'
import { Button, Col, Row, Space, Typography } from 'antd';
import { BrainGameContex } from '../../context/BrainGameContex';
import './QuestionPage.css'

const { Title, Paragraph } = Typography;


const QuestionsPage = () => {

    const { setCurrentQuestion, setQuestions, correctAnswerSelected, incorrectAnswersSelected, questions, score, currentQuestion } = useContext(BrainGameContex);

    const getNextQuestion = () => {
        return questions[correctAnswerSelected.length + incorrectAnswersSelected.length]
    }
    return (
        <div className='container'>
            <div className='card-home-page'  >
                <Row style={{ height: "100%" }} >
                    <Col span={12} style={{height:"100%",width:"100%"}} className='image-vertical'>
                    </Col>
                    <Col span={12}>
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Title level={3} >{currentQuestion.category}</Title>
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
                                <Button onClick={() => { setCurrentQuestion(getNextQuestion()) }} >GO!</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default QuestionsPage