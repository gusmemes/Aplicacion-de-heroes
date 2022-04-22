import React from 'react'
import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCards } from './HeroCards'

export const HeroList = ({publisher}) => {

const heroes= getHeroesByPublisher(publisher)

const hero = useMemo (() => getHeroesByPublisher(publisher),[publisher]);


  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>

      {
           heroes.map(hero =>(
            <HeroCards
             key={hero.id}
             {...hero}
             />
          
            
           ))
       } 
       </div>
  )
}
