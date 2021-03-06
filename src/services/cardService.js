'use strict';

const rngService = require('./rngService');

const MAX_NUMBER_OF_CARDS = 46;
let cardsAvailableInDeck = [];

resetDeck();

function resetDeck() {
  cardsAvailableInDeck = [];
  for(let i = 0; i < MAX_NUMBER_OF_CARDS; i++) {
    cardsAvailableInDeck.push(i);
  }
}

function retrieveRandomCard() {
  const randomNumber = rngService.getRandomInt(0, cardsAvailableInDeck.length);
  const cardRetrieved = cardsAvailableInDeck.splice(randomNumber, 1)[0];
  return cardRetrieved;
}

function retrieveCards(numberOfCards) {
  const cards = [];
  for(let i = 0; i < numberOfCards; i++) {
    cards.push(retrieveRandomCard());
  }

  return cards;
}

module.exports = {
  resetDeck,
  retrieveCards
};
