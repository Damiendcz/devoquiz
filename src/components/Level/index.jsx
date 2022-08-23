import {useState, useRef, useEffect} from 'react'
import './Level.scss'

const Level = ({slug}) => {

  //ref
  const labelRef = useRef([])
  labelRef.current = []

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState([])

  const questions = [
    {
      id: 1,
      question: 'Quelle est la capitale de la France ?',
      answers: [
        {
          id: 1,
          answer: 'Paris',
          isCorrect: true
        },
        {
          id: 2,
          answer: 'Marseille',
          isCorrect: false
        },
        {
          id: 3,
          answer: 'Lyon',
          isCorrect: false
        }
      ]
    },
    {
      id: 2,
      question: 'Quelle est la capitale de la Belgique ?',
      answers: [
        {
          id: 1,
          answer: 'Bruxelles',
          isCorrect: true
        },
        {
          id: 2,
          answer: 'Lyon',
          isCorrect: false
        },
        {
          id: 3,
          answer: 'Paris',
          isCorrect: false
        }
      ]
    },
    {
      id: 3,
      question: 'Quelle est la capitale de la Suisse ?',
      answers: [
        {
          id: 1,
          answer: 'Bruxelles',
          isCorrect: false
        },
        {
          id: 2,
          answer: 'Lyon',
          isCorrect: false
        },
        {
          id: 3,
          answer: 'Paris',
          isCorrect: true
        }
      ]
    }
  ]

  const addToRefs = (el) => {
    if(el && !labelRef.current.includes(el)) {
      labelRef.current.push(el)
    }
  }

  const handleQuiz = (answer) => {
    
    labelRef.current.forEach(label => {
      label.children[0].checked = false
    })
    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)

    } else {
      alert("Vous avez fini le quiz")
    }
  }


  const handleChangeAnswer = (answer, index) => {
    console.table(answer.target.value)
    // check if questionId exists in currentAnswer
    const questionId = questions[currentQuestion].id
    const isQuestion = currentAnswer.find(res => res.questionId === questionId) 
    if(isQuestion) {
      // update state with new answer

      const newAnswer = currentAnswer.map(res => {
        if(res.questionId === questionId) {
          return {
            ...res,
            answer: answer.target.value
          }
        }
        return res
      })
      setCurrentAnswer(newAnswer)

      
    } else {
      // add answer
      setCurrentAnswer([...currentAnswer, {
        questionId: questions[currentQuestion].id,
        answer: answer.target.value
      }])
    }



    labelRef.current.forEach(el => {
      el.classList.remove('border')
    })
    labelRef.current[index].classList.add('border')
  }

  return (
    <div className='level__container'>
      <div className='level__quiz__container'>
      <h3>Level : {slug}</h3>
      <h3>{questions[currentQuestion].question}</h3>
      <div>
        {questions[currentQuestion].answers.map((answer, i) => (
          <label className='level__answer__container' key={answer.id} htmlFor={answer.id} ref={addToRefs}>
              <input id={answer.id} className='level__answer__radio' type='radio' name={questions[currentQuestion]} value={JSON.stringify(answer)} onChange={(e) => handleChangeAnswer(e, i)}/> {answer.answer}
          </label>
        ))}
        <button className='level__answer__btn' onClick={(e) => handleQuiz(e)}>Valider</button>
      </div>
      <h4>question : {currentQuestion + 1} / {questions.length}</h4>

      <h4>Réponses</h4>

        {currentAnswer && currentAnswer.map(answer => (
          <div key={answer.questionId}>
            <p>Question : {answer.questionId}</p>
            <p>Réponse : {answer.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Level