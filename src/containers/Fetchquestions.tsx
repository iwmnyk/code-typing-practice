import { useState, useEffect } from "react"


export const useFetchQuestions = (selectedValue: string) => {

    const [questions, setQustions] = useState<string[]>([])
    const userSelected: string = selectedValue
    const limit = 10

    useEffect(() => {
      const fetchData = async () => {
        try {
          const module = await import(`../components/questionsData/${userSelected}.tsx`);
          const allQuetions = module.default
          const shuffled = allQuetions.slice().sort(()=> Math.random() -0.5 )
          setQustions(shuffled.slice(0, limit))
        } catch (error) {
          console.error('Failed to load module:', error)
        }
      }
      fetchData()
      }, [selectedValue])
    
    return questions
      
}

