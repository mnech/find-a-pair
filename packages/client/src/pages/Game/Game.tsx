import React, { useEffect, useRef } from "react";
import "./game.scss";
import { GameExe } from "./GameExe";

function Game() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;

    const ctx = canvas!.getContext("2d");

    new GameExe(canvas, ctx);
  }, []);

  return <canvas ref={ref} width={500} height={500} />;
}

export default Game;
