import { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import './recipe-card.css'

const RecipeCard = ({ author, name, date, image, description, steps }) => {
  const [stepsOpen, setStepsOpen] = useState(false)
  return (
    <div className={`card`}>
      <div
        className={`card__backsplash ${stepsOpen ? 'card__backsplash_open' : ''}`}
        onClick={() => setStepsOpen(false)}
      />
      <div className={`card__content card_shadow ${stepsOpen ? 'card__content_focused' : ''}`}>
        <div className='card__header'>
          <Avatar className='mr-2' src={author.image} alt={author.name}></Avatar>
          <div>
            <div className='card__title'>{name}</div>
            <div className='card__timestamp'>{date}</div>
          </div>
          <div className='ml-auto'>
            <button className='button button_icon hover-color_black ml-2'>
              <i className='fa-solid fa-ellipsis'></i>
            </button>
          </div>
        </div>
        <div className='card__image-container'>
          <img src={image} alt='Shrimp and Chorizo Paella' className='card__image' />
        </div>
        <div className='card__description'>{description}</div>
        {/* {stepsOpen && ( */}
        <div className={`card__steps ${stepsOpen ? 'card__steps_open' : ''}`}>
          {steps.map((step, idx) => (
            <div className='card__step-container'>
              <div className='card__step-marker'>STEP {idx + 1}: </div>
              <div className='card__step'>{step}</div>
            </div>
          ))}
        </div>
        {/* )} */}
        <div className='card__footer'>
          <button className='button button_icon hover-color_red'>
            <i className='fa-solid fa-heart'></i>
          </button>
          <button className='button button_icon hover-color_blue'>
            <i className='fa-solid fa-share'></i>
          </button>
          <button
            onClick={() => setStepsOpen(prev => !prev)}
            className='button button_icon hover-color_black ml-auto'
          >
            <i className='fa-solid fa-chevron-down'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
