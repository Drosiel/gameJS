import { useCallback, useState } from 'react'

import { Main } from '../components/Main'
import { GameOneInit } from '../game/game1/game1'
import { GameTwoInit } from '../game/game2/game2'

function App() {
  const [game, setGame] = useState<GameOneInit>()

  const starGame1 = useCallback(() => {
    const gameOne = new GameOneInit()

    gameOne.init()
    gameOne.start()

    setGame(game)
  }, [])

  const starGame2 = useCallback(() => {
    const gameTwo = new GameTwoInit()

    gameTwo.init()
    gameTwo.start()

    setGame(game)
  }, [])

  return !game && <Main starGame1={starGame1} starGame2={starGame2} />
}

export default App
