import React from 'react'
import Category from '../Category'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories__container'>
      <ul>
        <Category label="html" color={{color1: "#d84924", color2: "#e56027"}}/>
        <Category label="css" color={{color1: "#2449d8", color2: "#2760e5"}}/>
        <Category label="js" color={{color1: "#d89924", color2: "#e4b423"}}/>
      </ul>
    </div>
  )
}

export default Categories