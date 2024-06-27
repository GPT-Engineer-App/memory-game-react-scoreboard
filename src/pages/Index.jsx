import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
                className={`p-4 border rounded-lg text-2xl flex items-center justify-center cursor-pointer ${
                  flipped.includes(index) || matched.includes(index) ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => handleCardClick(index)}
              >
                {(flipped.includes(index) || matched.includes(index)) && icon}
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