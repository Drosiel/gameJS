import { useCallback, useState } from "react";

import { Main } from "../components/Main";
import { GameOneInit } from "../game/game1/game1";

function App() {
  const [game, setGame] = useState<GameOneInit>();

  const starGame = useCallback(() => {
    const gameOne = new GameOneInit();

    gameOne.init();
    gameOne.start();
    
    setGame(game);
  }, []);

  return !game && <Main starGame={starGame} />;
}

export default App;
