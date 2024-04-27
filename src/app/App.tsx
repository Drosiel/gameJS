import { useCallback, useState } from "react";
import { GameInit } from "../game/game";

import { Main } from "../components/Main";

function App() {
  const [game, setGame] = useState<GameInit>();

  const starGame = useCallback(() => {
    const game = new GameInit();

    game.init();
    game.start();
    setGame(game);
  }, []);

  return !game && <Main starGame={starGame} />;
}

export default App;
