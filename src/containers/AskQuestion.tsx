import { useState } from 'react'
import { useFetchQuestions } from './Fetchquestions'
import { Question } from '../components/Question'
import { UserInput } from '../components/UserInput'

export const AskQuestion: React.FC = () => {
    
    const questionsList = useFetchQuestions()
    const [currentIndex, setCurrentIndex] = useState<number>(1)

    const handleCorrect = () => {
        
        setCurrentIndex(currentIndex + 1)
    }

    const currentQuestion = questionsList[currentIndex]

    return (
        <>
            <Question count={currentIndex} question={currentQuestion} 　></Question>
            <UserInput handleCorrect={handleCorrect}/>
        </>
    )

}