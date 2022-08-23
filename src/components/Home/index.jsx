
import React from 'react'
import Categories from '../Categories'
import './Home.scss'

const Home = () => {
  return (
    <main className='home__container'>
      <section className='intro__container'>
      <h1>Des quiz pour tester 
          vos compétences !</h1>
      </section>
      <section className='categories__container'>
          <Categories />
      </section>
    </main>
  )
}

export default Home