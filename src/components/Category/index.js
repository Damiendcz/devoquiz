import {Link} from 'react-router-dom';
import './Category.scss'

const Category = ({label, color}) => {
  console.log(color);

  const bgColor = {
    backgroundColor: color.color1,
    background: `linear-gradient(to right, ${color.color1}, ${color.color2})`,
  }

  return (
    <Link to={`/quiz/${label}`}>
      <div style={bgColor} className='category__container'>
        <h2>{label}</h2>
      </div>
    </Link>
  )
}

export default Category