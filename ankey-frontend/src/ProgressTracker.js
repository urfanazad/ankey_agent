import React from 'react';

const ProgressTracker = ({ cards }) => {
  const learnedCount = cards.filter((card) => card.status === 'learned').length;
  const totalCount = cards.length;
  const progress = totalCount > 0 ? (learnedCount / totalCount) * 100 : 0;

  return (
    <div>
      <h2>Progress</h2>
      <p>
        {learnedCount} / {totalCount} cards learned
      </p>
      <progress value={progress} max="100" />
    </div>
  );
};

export default ProgressTracker;