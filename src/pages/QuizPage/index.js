import React from 'react'
import {useParams, Link} from 'react-router-dom'
import Level from '../../components/Level';

const QuizPage = () => {

  let {label, slug} = useParams();

  const display = slug ? (
    <div>
      {slug}
      <Level slug={slug} />
    </div>
  ) : (
      <ul>
        
        <Link to={`/quiz/${label}/debutant`}><li>Débutant</li></Link>
        <Link to={`/quiz/${label}/intermédiaire`}><li>Intermédiaire</li></Link>
        <Link to={`/quiz/${label}/difficile`}><li>Difficile</li></Link>
      </ul>
  )

  return (
    <div>
      <h1>Bienvenu sur la page des quiz {label}</h1>
      {display}
    </div>
  )
}

export default QuizPage