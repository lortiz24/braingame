import { Button, Card, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrainGameContex } from '../../context/BrainGameContex';
import { Questions } from '../../services/questions/Question.interface';
import EncodeUtils from '../../utils/EncodeUtils';
import './ResultPage.css'

const { Title, Paragraph } = Typography;



const ResultPage = () => {
    const navigate = useNavigate()
    const { correctAnswerSelected, setCorrectAnswerSelected, setCurrentQuestion, setIncorrectAnswersSelected, setQuestions, setScore, incorrectAnswersSelected } = useContext(BrainGameContex);

    const resetGame = () => {
        setCorrectAnswerSelected([])
        setCurrentQuestion(0)
        setIncorrectAnswersSelected([])
        setQuestions([])
        setScore(0)
        navigate('/home')
    }
    return (
        <div className='container'>
            <Card
                style={{overflow: 'auto'}}
                className='card-result-page'
                title={
                    <Title>
                        {`Your score ${correctAnswerSelected.length}/10`}
                    </Title>}
                actions={[
                    <Button
                        className='button-result'
                        onClick={resetGame}
                        size={'large'}
                    >
                        Play again
                    </Button>]}
            >
                <Title level={1}>
                    Correct answer
                </Title>
                {
                    correctAnswerSelected.map((question: Questions, index: number) => <Paragraph key={index}>{index + 1}. <EncodeUtils text={question.question} /></Paragraph>)
                }
                <Title level={1}>
                    Incorrect answer
                </Title>
                {
                    incorrectAnswersSelected.map((question: Questions, index: number) => <Paragraph key={index}>{index + 1}. <EncodeUtils text={question.question} /></Paragraph>)
                }

            </Card>
        </div>
    )
}

export default ResultPage