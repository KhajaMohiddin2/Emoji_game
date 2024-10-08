// Write your code here.
import './index.css'

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickplayAgain, score} = props
  const imageUrl = isWon ? wonImg : loseImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="curent-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickplayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="win-lose-img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
