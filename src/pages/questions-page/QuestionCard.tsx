import { Button, Col, Row, Typography } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrainGameContex } from '../../context/BrainGameContex';
import EncodeUtils from '../../utils/EncodeUtils';


const { Title, Paragraph } = Typography;


const QuestionCard = () => {

    const { setCurrentQuestion, correctAnswerSelected, incorrectAnswersSelected, questions, currentQuestion, setCorrectAnswerSelected, setIncorrectAnswersSelected } = useContext(BrainGameContex);
    const navigate = useNavigate()

    const handledAnswer = (respuesta: string) => {
        if (respuesta === questions[currentQuestion].correct_answer) {
            setCorrectAnswerSelected([...correctAnswerSelected, questions[currentQuestion]])
        } else {
            setIncorrectAnswersSelected([...incorrectAnswersSelected, questions[currentQuestion]])
        }
        getNextQuestion()
    }

    const getNextQuestion = () => {
        if (currentQuestion < 9) {
            return setCurrentQuestion(currentQuestion + 1)
        } else {
            navigate('/results')
        }
    }
    return (
        <>
            <Col span={24}>

                <Row justify={'center'}>
                    <Col span={12}>
                        <Title level={2} style={{ color: '#4A2775', fontSize: '28px' }}><EncodeUtils text={questions[currentQuestion].question} /></Title>
                    </Col>
                </Row>
                <Row justify={'space-around'}>
                    <Col span={12} style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button
                            onClick={() => handledAnswer('True')}
                            size='large'
                            style={{ width: '40%', height: 40, color: 'purple', borderColor: 'purple' }}
                        >TRUE
                        </Button>
                        <Button
                            onClick={() => handledAnswer('False')}
                            size='large'
                            style={{ width: '40%', height: 40, color: 'purple', borderColor: 'purple' }}
                        >FALSE
                        </Button>


                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default QuestionCard