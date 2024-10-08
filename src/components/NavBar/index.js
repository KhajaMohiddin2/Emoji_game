// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameinProgress, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="title-score-con">
        <div className="logo-title-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title-name">Emoji Game</h1>
        </div>
        {isGameinProgress && (
          <div className="score-con">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
