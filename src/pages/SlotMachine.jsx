import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍍", "⭐"];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const SlotMachine = () => {
  const [reels, setReels] = useState([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
  const [spinning, setSpinning] = useState(false);

  const spinReels = () => {
    setSpinning(true);
    setTimeout(() => {
      setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Slot Machine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-6xl">
            {reels.map((symbol, index) => (
              <div key={index} className={`transition-transform duration-1000 ${spinning ? "transform rotate-360" : ""}`}>
                {symbol}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Button onClick={spinReels} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </Button>
    </div>
  );
};

export default SlotMachine;