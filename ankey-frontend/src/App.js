import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import FlashcardView from './FlashcardView';
import DocumentUpload from './DocumentUpload';
import ProgressTracker from './ProgressTracker';

const mockFlashcards = [
  { id: 1, question: 'What is the capital of France?', answer: 'Paris', status: 'new', interval: 1, nextReviewDate: null },
  { id: 2, question: 'What is 2 + 2?', answer: '4', status: 'new', interval: 1, nextReviewDate: null },
  { id: 3, question: 'What is the powerhouse of the cell?', answer: 'Mitochondria', status: 'new', interval: 1, nextReviewDate: null },
];

function App() {
  const [cards, setCards] = useState(mockFlashcards);

  return (
    <div className="App">
      <Header />
      <main>
        <DocumentUpload />
        <FlashcardView cards={cards} setCards={setCards} />
        <ProgressTracker cards={cards} />
      </main>
    </div>
  );
}

export default App;