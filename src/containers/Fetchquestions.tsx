import { useState, useEffect } from "react"


export const FetchQuestions: React.FC = () => {

    const [questions, setQustions] = useState<string[]>([])
    const userSelected: string = 'javascript_beginner'

    const limit = 10

    useEffect(() => {
        import(`../components/questionsData/${userSelected}`).then(module => {
          const allQuestions = module.default
          const shuffled = allQuestions.slice().sort(()=> Math.random() -0.5 )
          
          setQustions(shuffled.slice(0, limit))

        }).catch(error => {
          console.error('Failed to load module:', error)
        })
      }, [userSelected])
    
    return questions
      
}

