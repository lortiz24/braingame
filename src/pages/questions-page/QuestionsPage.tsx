import React, { useContext } from 'react'
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { BrainGameContex } from '../../context/BrainGameContex';
import './QuestionPage.css'
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;


const QuestionsPage = () => {

    const { setCurrentQuestion, setQuestions, correctAnswerSelected, incorrectAnswersSelected, questions, score, currentQuestion } = useContext(BrainGameContex);
    const navigate = useNavigate()



    return (
        <div className='container'>
            <Card
                title={
                    <Title
                        level={2} style={{ color: '#E384FF', fontSize: '38px' }}>{questions[currentQuestion].category}
                    </Title>}
            >

                <Row style={{ height: "100%" }} >
                    <QuestionCard />
                </Row>


            </Card>
        </div>
    )
}

export default QuestionsPage