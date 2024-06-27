import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cardStyles = {
  container: "perspective-1000",
  card: "relative w-full h-full transform-style-preserve-3d transition-transform duration-500",
  flipped: "rotate-y-180",
  front: "absolute w-full h-full backface-hidden bg-gray-300 flex items-center justify-center text-2xl",
  back: "absolute w-full h-full backface-hidden bg-white transform rotate-y-180 flex items-center justify-center text-2xl",
};

const generateCards = () => {
  const icons = [
    "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝",
    "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝"
  ];
  return icons.sort(() => Math.random() - 0.5);
};

const Index = () => {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatched([...matched, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlipped([]), 1000);
      setAttempts(attempts + 1);
    }
  }, [flipped]);

  const handleCardClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Memory Game</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2">
            {cards.map((icon, index) => (
              <div
                key={index}
                className={`${cardStyles.container} ${flipped.includes(index) || matched.includes(index) ? cardStyles.flipped : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.front}></div>
                  <div className={cardStyles.back}>{icon}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex space-x-4">
        <div>Attempts: {attempts}</div>
        <div>Matches: {matched.length / 2}</div>
      </div>
      <Button onClick={resetGame}>Reset Game</Button>
    </div>
  );
};

export default Index;