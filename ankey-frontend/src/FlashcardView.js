import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import { schedule } from './spacedRepetition';

const FlashcardView = ({ cards, setCards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);

  useEffect(() => {
    const now = new Date();
    const due = cards.filter(card => !card.nextReviewDate || new Date(card.nextReviewDate) <= now);
    setDueCards(due);
    setCurrentCardIndex(0);
  }, [cards]);

  const handleNextCard = () => {
    if (dueCards.length > 1) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % dueCards.length);
    }
  };

  const handleCardStatusChange = (cardId, status) => {
    const card = cards.find(c => c.id === cardId);
    const updatedCard = schedule(card, status);
    const updatedCards = cards.map((c) => (c.id === cardId ? updatedCard : c));
    setCards(updatedCards);
  };

  return (
    <div>
      <h2>Flashcard Review</h2>
      {dueCards.length > 0 ? (
        <>
          <Flashcard card={dueCards[currentCardIndex]} />
          <div>
            <button onClick={() => handleCardStatusChange(dueCards[currentCardIndex].id, 'learned')}>Learned</button>
            <button onClick={() => handleCardStatusChange(dueCards[currentCardIndex].id, 'need review')}>Need Review</button>
            <button onClick={() => handleCardStatusChange(dueCards[currentCardIndex].id, 'difficult')}>Difficult</button>
          </div>
          <button onClick={handleNextCard}>Next Card</button>
        </>
      ) : (
        <p>No cards due for review.</p>
      )}
    </div>
  );
};

export default FlashcardView;