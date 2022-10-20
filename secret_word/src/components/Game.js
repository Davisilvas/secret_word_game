import  './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verifyLetter}>Finalize o jogo!</button>
    </div>
  )
}

export default Game