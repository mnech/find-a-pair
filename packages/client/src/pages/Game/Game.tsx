import React, { useEffect, useRef } from "react";
import "./game.scss";
import { GameController } from "./GameController";

function Game() {
  
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let game: GameController;
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      game = new GameController(canvas, ctx);
    }
    return () => {
      game.removeEventClickStartGameAndSquares();
    };
  }, []);

  return <canvas ref={ref} width={500} height={500} />;
}

export default Game;
