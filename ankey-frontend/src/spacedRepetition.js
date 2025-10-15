// A simple spaced repetition algorithm
// This is a basic implementation and can be improved with more advanced logic.

export const schedule = (card, status) => {
  const now = new Date();
  let nextReviewDate = new Date();

  if (status === 'learned') {
    // If the card is learned, schedule it for review in the future.
    // The interval will increase with each correct review.
    const interval = card.interval || 1;
    nextReviewDate.setDate(now.getDate() + interval);
    return { ...card, interval: interval * 2, nextReviewDate };
  } else if (status === 'need review') {
    // If the card needs review, schedule it for review soon.
    nextReviewDate.setMinutes(now.getMinutes() + 10); // Review in 10 minutes
    return { ...card, interval: 1, nextReviewDate };
  } else if (status === 'difficult') {
    // If the card is difficult, schedule it for review very soon.
    nextReviewDate.setMinutes(now.getMinutes() + 1); // Review in 1 minute
    return { ...card, interval: 1, nextReviewDate };
  }

  return card;
};