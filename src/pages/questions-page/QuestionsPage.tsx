import React, { useContext } from 'react'
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { BrainGameContex } from '../../context/BrainGameContex';
import './QuestionPage.css'
import QuestionCard from './QuestionCard';

const { Title, Paragraph } = Typography;


const QuestionsPage = () => {

    const { setCurrentQuestion, setQuestions, correctAnswerSelected, incorrectAnswersSelected, questions, score, currentQuestion } = useContext(BrainGameContex);

    const getNextQuestion = () => {
        return setCurrentQuestion(currentQuestion + 1)
    }
    const getPreviusQuestion = () => {
        return setCurrentQuestion(currentQuestion - 1)
    }
    return (
        <div className='container'>
            <Card
                title={<Title level={2} style={{ color: '#E384FF', fontSize: '38px' }}>{questions[currentQuestion].category}</Title>}
                actions={[<Button shape="round" type='primary' size='large' onClick={() => { getNextQuestion() }} >GO!</Button>]}
            >

                <Row style={{ height: "100%" }} >
                    <QuestionCard />
                </Row>


            </Card>
        </div>
    )
}

export default QuestionsPage