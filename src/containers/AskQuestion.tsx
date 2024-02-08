import { FetchQuestions } from './Fetchquestions'
import { Question } from '../components/Question'

export const AskQuestion: React.FC = () => {

    const QuestionsList = FetchQuestions

    QuestionsList.map((m, i) => {
        <Question ></Question>

    })

}