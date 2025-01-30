import React, { useState } from "react";


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState(() => {
    const duplicated = [...images, ...images].map((img, index) => ({
      id: index,
      image: img,
      isFlipped: false,
      isMatched: false,
    }));
    return shuffleArray(duplicated);
  });
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleCardClick = (index) => {
    if (disabled || cards[index].isMatched || cards[index].isFlipped || flippedIndices.length === 2) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex].image === cards[secondIndex].image) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedIndices([]);
      } else {
        setDisabled(true);
        setTimeout(() => {
          const resetCards = cards.map((card, i) => {
            if (i === firstIndex || i === secondIndex) {
              return { ...card, isFlipped: false };
            }
            return card;
          });
          setCards(resetCards);
          setFlippedIndices([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="memory-game-container">
      <h2>Memory Game</h2>
      <div className="memory-game-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-card ${card.isFlipped ? "flipped" : ""} ${
              card.isMatched ? "matched" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front"></div>
            <div className="card-back">
              <img src={card.image} alt="Memory card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MemoryCard = () => (
  <MemoryGame
    images={[
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
      "https://images.unsplash.com/photo-1520763185298-1b434c919102",
      "https://images.unsplash.com/photo-1442458017215-285b83f65851",
      "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
      "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
    ]}
  />
);

export default MemoryGame;