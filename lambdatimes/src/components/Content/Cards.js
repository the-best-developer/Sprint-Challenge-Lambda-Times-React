import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((cardData, i) => {
            return (
              <Card key={i} card={cardData} />
            )
          })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};  

// Make sure you include prop types for all of your incoming props

export default Cards;