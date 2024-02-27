import { useState } from 'react'
import { useFetchQuestions } from './Fetchquestions'
import { Question } from '../components/Question'
import { UserInput } from '../components/UserInput'
import { useParams } from 'react-router-dom'

export const AskQuestion: React.FC = () => {
    
    const selectedValue = useParams().selectedValue ?? "";
    const questionsList = useFetchQuestions(selectedValue);
    const [currentIndex, setCurrentIndex] = useState<number>(1);



    const handleCorrect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value === questionsList[currentIndex]){
            setCurrentIndex(currentIndex + 1);
            e.currentTarget.value = "";
        }
    }

    const currentQuestion = questionsList[currentIndex]

    return (
        <>
            <Question count={currentIndex} question={currentQuestion} 　></Question>
            <UserInput handleCorrect={handleCorrect} />
        </>
    )

}