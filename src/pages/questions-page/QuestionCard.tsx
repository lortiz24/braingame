import { Button, Col, Row, Typography } from 'antd';
import React, { useContext } from 'react'
import { BrainGameContex } from '../../context/BrainGameContex';


const { Title, Paragraph } = Typography;


const QuestionCard = () => {
    const { setCurrentQuestion, setQuestions, correctAnswerSelected, incorrectAnswersSelected, questions, score, currentQuestion } = useContext(BrainGameContex);
    return (
        <>
            <Col span={24}>

                <Row justify={'center'}>
                    <Col span={12}>
                        <Paragraph >{<Title level={2} style={{ color: '#FFD700', fontSize: '28px' }}>{questions[currentQuestion].question}</Title>}</Paragraph>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col span={12}>
                        <Button>
                            TRUE
                        </Button>
                        <Button>
                            FALSE
                        </Button>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col span={12}>

                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default QuestionCard